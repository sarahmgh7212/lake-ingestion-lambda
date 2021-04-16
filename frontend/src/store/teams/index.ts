import type { GenericObject } from "@/libs";
import { Team } from "@/models";
import { DataStore, OpType } from "@aws-amplify/datastore";
import type { Module } from "vuex";
import { ActionTypes, TeamMap, TeamsBaseState, MutationTypes } from "./types";
export * from "./types";

export const module: Module<TeamsBaseState, GenericObject> = {
  namespaced: true,

  state: {
    subscription: null,
    teams: {},
  },

  getters: {
    exists: (state) => (id: string) =>
      Object.prototype.hasOwnProperty.call(state.teams, id),
    getById: (state) => (id: string) => state.teams[id],
  },

  mutations: {
    [MutationTypes.SET_SOURCES](state, { teams }) {
      state.teams = teams;
    },

    [MutationTypes.UPSERT_SOURCE](state, { id, team }) {
      state.teams[id] = team;
    },

    [MutationTypes.DELETE_SOURCE](state, { id }) {
      if (!Object.prototype.hasOwnProperty.call(state.teams, id)) {
        throw new Error(`No team '${id}' found in teams`);
      }

      delete state.teams[id];
    },

    [MutationTypes.SET_SUBSCRIPTION](state, { subscription }) {
      state.subscription = subscription;
    },
  },

  actions: {
    async [ActionTypes.INIT_LIST]({ commit }) {
      const rawTeams = await DataStore.query(Team);

      const teams = rawTeams.reduce<TeamMap>((acc: TeamMap, cur: Team) => {
        acc[cur.id] = cur;
        return acc;
      }, {});

      commit(MutationTypes.SET_SOURCES, { teams });
    },

    [ActionTypes.SUBSCRIBE]({ commit }) {
      const subscription = DataStore.observe(Team).subscribe((msg) => {
        const team = msg.element;

        if ([OpType.INSERT, OpType.UPDATE].includes(msg.opType)) {
          commit(MutationTypes.UPSERT_SOURCE, { id: team.id, team });
        } else if (msg.opType === OpType.DELETE) {
          commit(MutationTypes.DELETE_SOURCE, { id: team.id });
        } else {
          throw new Error("Unsupported operation in teams subcription");
        }
      });

      commit(MutationTypes.SET_SUBSCRIPTION, { subscription });
    },

    [ActionTypes.UNSUBSCRIBE]({ state, commit }) {
      if (!state.subscription) {
        throw new Error("Teams is not currently subscribed");
      }

      state.subscription.unsubscribe();

      commit(MutationTypes.SET_SUBSCRIPTION, null);
    },

    async [ActionTypes.CREATE](ctx, { team }) {
      await DataStore.save(
        new Team({
          name: team.name,
        })
      );
    },

    async [ActionTypes.UPDATE]({ getters }, { id, team }) {
      const original = getters.getById(id);

      if (!original) {
        throw new Error(`Team '${team.id}' does not exist.`);
      }

      await DataStore.save(
        Team.copyOf(original, (updated) => {
          updated.name = team.name;
        })
      );
    },

    async [ActionTypes.DELETE]({ getters }, { id }) {
      const team = getters.getById(id);

      if (!team) {
        throw new Error(`Team '${team.id}' does not exist.`);
      }

      return DataStore.delete(team);
    },

    [ActionTypes.CLEAR]({ commit, dispatch }) {
      dispatch(ActionTypes.UNSUBSCRIBE);
      commit(MutationTypes.SET_SOURCES, { teams: {} });
    },
  },
};
