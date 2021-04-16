import type { GenericObject } from "@/libs";
import { Pipe } from "@/models";
import { DataStore, OpType } from "@aws-amplify/datastore";
import type { Module } from "vuex";
import { ActionTypes, PipeMap, PipesBaseState, MutationTypes } from "./types";
export * from "./types";

export const module: Module<PipesBaseState, GenericObject> = {
  namespaced: true,

  state: {
    subscription: null,
    pipes: {},
  },

  getters: {
    exists: (state) => (id: string) =>
      Object.prototype.hasOwnProperty.call(state.pipes, id),
    getById: (state) => (id: string) => state.pipes[id],
  },

  mutations: {
    [MutationTypes.SET_SOURCES](state, { pipes }) {
      state.pipes = pipes;
    },

    [MutationTypes.UPSERT_SOURCE](state, { id, pipe }) {
      state.pipes[id] = pipe;
    },

    [MutationTypes.DELETE_SOURCE](state, { id }) {
      if (!Object.prototype.hasOwnProperty.call(state.pipes, id)) {
        throw new Error(`No pipe '${id}' found in pipes`);
      }

      delete state.pipes[id];
    },

    [MutationTypes.SET_SUBSCRIPTION](state, { subscription }) {
      state.subscription = subscription;
    },
  },

  actions: {
    async [ActionTypes.INIT_LIST]({ commit }) {
      const rawPipes = await DataStore.query(Pipe);

      const pipes = rawPipes.reduce<PipeMap>((acc: PipeMap, cur: Pipe) => {
        acc[cur.id] = cur;
        return acc;
      }, {});

      commit(MutationTypes.SET_SOURCES, { pipes });
    },

    [ActionTypes.SUBSCRIBE]({ commit }) {
      const subscription = DataStore.observe(Pipe).subscribe((msg) => {
        const pipe = msg.element;

        if ([OpType.INSERT, OpType.UPDATE].includes(msg.opType)) {
          commit(MutationTypes.UPSERT_SOURCE, { id: pipe.id, pipe });
        } else if (msg.opType === OpType.DELETE) {
          commit(MutationTypes.DELETE_SOURCE, { id: pipe.id });
        } else {
          throw new Error("Unsupported operation in pipes subcription");
        }
      });

      commit(MutationTypes.SET_SUBSCRIPTION, { subscription });
    },

    [ActionTypes.UNSUBSCRIBE]({ state, commit }) {
      if (!state.subscription) {
        throw new Error("Pipes is not currently subscribed");
      }

      state.subscription.unsubscribe();

      commit(MutationTypes.SET_SUBSCRIPTION, null);
    },

    async [ActionTypes.CREATE](ctx, { pipe }) {
      await DataStore.save(
        new Pipe({
          name: pipe.name,
          catalog: pipe.catalog,
          schedule: pipe.schedule,
          status: pipe.status,
          jobId: pipe.jobId,
        })
      );
    },

    async [ActionTypes.UPDATE]({ getters }, { id, pipe }) {
      const original = getters.getById(id);

      if (!original) {
        throw new Error(`Pipe '${pipe.id}' does not exist.`);
      }

      await DataStore.save(
        Pipe.copyOf(original, (updated) => {
          updated.name = pipe.name;
          updated.catalog = pipe.catalog;
          updated.schedule = pipe.schedule;
          updated.status = pipe.status;
          updated.jobId = pipe.jobId;
        })
      );
    },

    async [ActionTypes.DELETE]({ getters }, { id }) {
      const pipe = getters.getById(id);

      if (!pipe) {
        throw new Error(`Pipe '${pipe.id}' does not exist.`);
      }

      return DataStore.delete(pipe);
    },

    [ActionTypes.CLEAR]({ commit, dispatch }) {
      dispatch(ActionTypes.UNSUBSCRIBE);
      commit(MutationTypes.SET_SOURCES, { pipes: {} });
    },
  },
};
