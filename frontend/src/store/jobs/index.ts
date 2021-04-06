import type { GenericObject } from "@/libs";
import { Job } from "@/models";
import { DataStore, OpType } from "@aws-amplify/datastore";
import type { Module } from "vuex";
import { ActionTypes, JobMap, JobsBaseState, MutationTypes } from "./types";
export * from "./types";

export const module: Module<JobsBaseState, GenericObject> = {
  namespaced: true,

  state: {
    subscription: null,
    jobs: {},
  },

  getters: {
    exists: (state) => (id: string) =>
      Object.prototype.hasOwnProperty.call(state.jobs, id),
    getById: (state) => (id: string) => state.jobs[id],
  },

  mutations: {
    [MutationTypes.SET_SOURCES](state, { jobs }) {
      state.jobs = jobs;
    },

    [MutationTypes.UPSERT_SOURCE](state, { id, job }) {
      state.jobs[id] = job;
    },

    [MutationTypes.DELETE_SOURCE](state, { id }) {
      if (!Object.prototype.hasOwnProperty.call(state.jobs, id)) {
        throw new Error(`No job '${id}' found in jobs`);
      }

      delete state.jobs[id];
    },

    [MutationTypes.SET_SUBSCRIPTION](state, { subscription }) {
      state.subscription = subscription;
    },
  },

  actions: {
    async [ActionTypes.INIT_LIST]({ commit }) {
      const rawJobs = await DataStore.query(Job);

      const jobs = rawJobs.reduce<JobMap>((acc: JobMap, cur: Job) => {
        acc[cur.id] = cur;
        return acc;
      }, {});

      commit(MutationTypes.SET_SOURCES, { jobs });
    },

    [ActionTypes.SUBSCRIBE]({ commit }) {
      const subscription = DataStore.observe(Job).subscribe((msg) => {
        const job = msg.element;

        if ([OpType.INSERT, OpType.UPDATE].includes(msg.opType)) {
          commit(MutationTypes.UPSERT_SOURCE, { id: job.id, job });
        } else if (msg.opType === OpType.DELETE) {
          commit(MutationTypes.DELETE_SOURCE, { id: job.id });
        } else {
          throw new Error("Unsupported operation in jobs subcription");
        }
      });

      commit(MutationTypes.SET_SUBSCRIPTION, { subscription });
    },

    [ActionTypes.UNSUBSCRIBE]({ state, commit }) {
      if (!state.subscription) {
        throw new Error("Jobs is not currently subscribed");
      }

      state.subscription.unsubscribe();

      commit(MutationTypes.SET_SUBSCRIPTION, null);
    },

    async [ActionTypes.CREATE](ctx, { job }) {
      await DataStore.save(
        new Job({
          initCompletedAt: job.initCompletedAt,
          startedAt: job.startedAt,
          completedAt: job.completedAt,
          failedAt: job.failedAt,
          logsARN: job.logsARN,
        })
      );
    },

    async [ActionTypes.UPDATE]({ getters }, { id, job }) {
      const original = getters.getById(id);

      if (!original) {
        throw new Error(`Job '${job.id}' does not exist.`);
      }

      await DataStore.save(
        Job.copyOf(original, (updated) => {
          updated.initCompletedAt = job.initCompletedAt;
          updated.startedAt = job.startedAt;
          updated.completedAt = job.completedAt;
          updated.failedAt = job.failedAt;
          updated.logsARN = job.logsARN;
        })
      );
    },

    async [ActionTypes.DELETE]({ getters }, { id }) {
      const job = getters.getById(id);

      if (!job) {
        throw new Error(`Job '${job.id}' does not exist.`);
      }

      return DataStore.delete(job);
    },

    [ActionTypes.CLEAR]({ commit, dispatch }) {
      dispatch(ActionTypes.UNSUBSCRIBE);
      commit(MutationTypes.SET_SOURCES, { jobs: {} });
    },
  },
};
