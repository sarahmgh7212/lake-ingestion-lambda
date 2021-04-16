import type { GenericObject } from "@/libs";
import { SourceType } from "@/models";
import { DataStore, OpType } from "@aws-amplify/datastore";
import type { Module } from "vuex";
import {
  ActionTypes,
  SourceTypeMap,
  SourceTypesBaseState,
  MutationTypes,
} from "./types";
export * from "./types";

export const module: Module<SourceTypesBaseState, GenericObject> = {
  namespaced: true,

  state: {
    subscription: null,
    sourceTypes: {},
  },

  getters: {
    exists: (state) => (id: string) =>
      Object.prototype.hasOwnProperty.call(state.sourceTypes, id),
    getById: (state) => (id: string) => state.sourceTypes[id],
  },

  mutations: {
    [MutationTypes.SET_SOURCES](state, { sourceTypes }) {
      state.sourceTypes = sourceTypes;
    },

    [MutationTypes.UPSERT_SOURCE](state, { id, sourceType }) {
      state.sourceTypes[id] = sourceType;
    },

    [MutationTypes.DELETE_SOURCE](state, { id }) {
      if (!Object.prototype.hasOwnProperty.call(state.sourceTypes, id)) {
        throw new Error(`No sourceType '${id}' found in sourceTypes`);
      }

      delete state.sourceTypes[id];
    },

    [MutationTypes.SET_SUBSCRIPTION](state, { subscription }) {
      state.subscription = subscription;
    },
  },

  actions: {
    async [ActionTypes.INIT_LIST]({ commit }) {
      const rawSourceTypes = await DataStore.query(SourceType);

      const sourceTypes = rawSourceTypes.reduce<SourceTypeMap>(
        (acc: SourceTypeMap, cur: SourceType) => {
          acc[cur.id] = cur;
          return acc;
        },
        {}
      );

      commit(MutationTypes.SET_SOURCES, { sourceTypes });
    },

    [ActionTypes.SUBSCRIBE]({ commit }) {
      const subscription = DataStore.observe(SourceType).subscribe(
        (msg) => {
          const sourceType = msg.element;

          if ([OpType.INSERT, OpType.UPDATE].includes(msg.opType)) {
            commit(MutationTypes.UPSERT_SOURCE, {
              id: sourceType.id,
              sourceType,
            });
          } else if (msg.opType === OpType.DELETE) {
            commit(MutationTypes.DELETE_SOURCE, { id: sourceType.id });
          } else {
            throw new Error("Unsupported operation in sourceTypes subcription");
          }
        },
        (err) => {
          console.log(err);
        }
      );

      commit(MutationTypes.SET_SUBSCRIPTION, { subscription });
    },

    [ActionTypes.UNSUBSCRIBE]({ state, commit }) {
      if (!state.subscription) {
        throw new Error("SourceTypes is not currently subscribed");
      }

      state.subscription.unsubscribe();

      commit(MutationTypes.SET_SUBSCRIPTION, null);
    },

    async [ActionTypes.CREATE](ctx, { sourceType }) {
      await DataStore.save(
        new SourceType({
          name: sourceType.name,
          configSchema: sourceType.configSchema,
          container: sourceType.container,
          taskARN: sourceType.taskARN,
        })
      );
    },

    async [ActionTypes.UPDATE]({ getters }, { id, sourceType }) {
      const original = getters.getById(id);

      if (!original) {
        throw new Error(`SourceType '${sourceType.id}' does not exist.`);
      }

      await DataStore.save(
        SourceType.copyOf(original, (updated) => {
          updated.name = sourceType.name;
          updated.configSchema = sourceType.configSchema;
          updated.container = sourceType.container;
          updated.taskARN = sourceType.taskARN;
        })
      );
    },

    async [ActionTypes.DELETE]({ getters }, { id }) {
      const sourceType = getters.getById(id);

      if (!sourceType) {
        throw new Error(`SourceType '${sourceType.id}' does not exist.`);
      }

      return DataStore.delete(sourceType);
    },

    [ActionTypes.CLEAR]({ commit, dispatch }) {
      dispatch(ActionTypes.UNSUBSCRIBE);
      commit(MutationTypes.SET_SOURCES, { sourceTypes: {} });
    },
  },
};
