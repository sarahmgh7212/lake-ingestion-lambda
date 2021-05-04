import type { GenericObject } from "@/libs";
import { Source } from "@/models";
import { DataStore, OpType } from "@aws-amplify/datastore";
import type { Module } from "vuex";
import {
  ActionTypes,
  SourceMap,
  SourcesBaseState,
  MutationTypes,
} from "./types";
export * from "./types";

export const module: Module<SourcesBaseState, GenericObject> = {
  namespaced: true,

  state: {
    subscription: null,
    sources: {},
  },

  getters: {
    exists: (state) => (id: string) =>
      Object.prototype.hasOwnProperty.call(state.sources, id),
    getById: (state) => (id: string) => state.sources[id],
  },

  mutations: {
    [MutationTypes.SET_SOURCES](state, { sources }) {
      state.sources = sources;
    },

    [MutationTypes.UPSERT_SOURCE](state, { id, source }) {
      state.sources[id] = source;
    },

    [MutationTypes.DELETE_SOURCE](state, { id }) {
      if (!Object.prototype.hasOwnProperty.call(state.sources, id)) {
        throw new Error(`No source '${id}' found in sources`);
      }

      delete state.sources[id];
    },

    [MutationTypes.SET_SUBSCRIPTION](state, { subscription }) {
      state.subscription = subscription;
    },
  },

  actions: {
    async [ActionTypes.INIT_LIST]({ commit }) {
      const rawSources = await DataStore.query(Source);

      const sources = rawSources.reduce<SourceMap>(
        (acc: SourceMap, cur: Source) => {
          acc[cur.id] = cur;
          return acc;
        },
        {}
      );

      commit(MutationTypes.SET_SOURCES, { sources });
    },

    [ActionTypes.SUBSCRIBE]({ commit }) {
      const subscription = DataStore.observe(Source).subscribe((msg) => {
        const source = msg.element;

        if ([OpType.INSERT, OpType.UPDATE].includes(msg.opType)) {
          commit(MutationTypes.UPSERT_SOURCE, { id: source.id, source });
        } else if (msg.opType === OpType.DELETE) {
          commit(MutationTypes.DELETE_SOURCE, { id: source.id });
        } else {
          throw new Error("Unsupported operation in sources subcription");
        }
      });

      commit(MutationTypes.SET_SUBSCRIPTION, { subscription });
    },

    [ActionTypes.UNSUBSCRIBE]({ state, commit }) {
      if (!state.subscription) {
        throw new Error("Sources is not currently subscribed");
      }

      state.subscription.unsubscribe();

      commit(MutationTypes.SET_SUBSCRIPTION, null);
    },

    async [ActionTypes.CREATE](ctx, { source }) {
      const newSource = new Source({
        name: source.name,
        config: source.config,
        sourceType: source.sourceType,
        team: source.team,
      });

      console.log("dfsdfsdfds");

      await DataStore.save(newSource);

      console.log("dfsdfsd");
    },

    async [ActionTypes.UPDATE]({ getters }, { id, source }) {
      const original = getters.getById(id);

      if (!original) {
        throw new Error(`Source '${source.id}' does not exist.`);
      }

      await DataStore.save(
        Source.copyOf(original, (updated) => {
          updated.name = source.name;
          updated.config = source.config;
          updated.sourceType = source.sourceType;
          updated.team = source.team;
        })
      );
    },

    async [ActionTypes.DELETE]({ getters }, { id }) {
      const source = getters.getById(id);

      if (!source) {
        throw new Error(`Source '${source.id}' does not exist.`);
      }

      return DataStore.delete(source);
    },

    [ActionTypes.CLEAR]({ commit, dispatch }) {
      dispatch(ActionTypes.UNSUBSCRIBE);
      commit(MutationTypes.SET_SOURCES, { sources: {} });
    },
  },
};
