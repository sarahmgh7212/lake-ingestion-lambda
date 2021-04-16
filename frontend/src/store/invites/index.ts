import type { GenericObject } from "@/libs";
import { Invite } from "@/models";
import { DataStore, OpType } from "@aws-amplify/datastore";
import type { Module } from "vuex";
import {
  ActionTypes,
  InviteMap,
  InvitesBaseState,
  MutationTypes,
} from "./types";
export * from "./types";

export const module: Module<InvitesBaseState, GenericObject> = {
  namespaced: true,

  state: {
    subscription: null,
    invites: {},
  },

  getters: {
    exists: (state) => (id: string) =>
      Object.prototype.hasOwnProperty.call(state.invites, id),
    getById: (state) => (id: string) => state.invites[id],
  },

  mutations: {
    [MutationTypes.SET_SOURCES](state, { invites }) {
      state.invites = invites;
    },

    [MutationTypes.UPSERT_SOURCE](state, { id, invite }) {
      state.invites[id] = invite;
    },

    [MutationTypes.DELETE_SOURCE](state, { id }) {
      if (!Object.prototype.hasOwnProperty.call(state.invites, id)) {
        throw new Error(`No invite '${id}' found in invites`);
      }

      delete state.invites[id];
    },

    [MutationTypes.SET_SUBSCRIPTION](state, { subscription }) {
      state.subscription = subscription;
    },
  },

  actions: {
    async [ActionTypes.INIT_LIST]({ commit }) {
      const rawInvites = await DataStore.query(Invite);

      const invites = rawInvites.reduce<InviteMap>(
        (acc: InviteMap, cur: Invite) => {
          acc[cur.id] = cur;
          return acc;
        },
        {}
      );

      commit(MutationTypes.SET_SOURCES, { invites });
    },

    [ActionTypes.SUBSCRIBE]({ commit }) {
      const subscription = DataStore.observe(Invite).subscribe((msg) => {
        const invite = msg.element;

        if ([OpType.INSERT, OpType.UPDATE].includes(msg.opType)) {
          commit(MutationTypes.UPSERT_SOURCE, { id: invite.id, invite });
        } else if (msg.opType === OpType.DELETE) {
          commit(MutationTypes.DELETE_SOURCE, { id: invite.id });
        } else {
          throw new Error("Unsupported operation in invites subcription");
        }
      });

      commit(MutationTypes.SET_SUBSCRIPTION, { subscription });
    },

    [ActionTypes.UNSUBSCRIBE]({ state, commit }) {
      if (!state.subscription) {
        throw new Error("Invites is not currently subscribed");
      }

      state.subscription.unsubscribe();

      commit(MutationTypes.SET_SUBSCRIPTION, null);
    },

    async [ActionTypes.CREATE](ctx, { invite }) {
      await DataStore.save(
        new Invite({
          email: invite.email,
          requestorId: invite.requestorId,
          user: invite.user,
          team: invite.team,
          // requestor: invite.requestor,
        })
      );
    },

    async [ActionTypes.UPDATE]({ getters }, { id, invite }) {
      const original = getters.getById(id);

      if (!original) {
        throw new Error(`Invite '${invite.id}' does not exist.`);
      }

      await DataStore.save(
        Invite.copyOf(original, (updated) => {
          updated.email = invite.email;
          updated.requestorId = invite.requestorId;
          updated.user = invite.user;
          updated.team = invite.team;
          // updated.requestor = invite.requestor;
        })
      );
    },

    async [ActionTypes.DELETE]({ getters }, { id }) {
      const invite = getters.getById(id);

      if (!invite) {
        throw new Error(`Invite '${invite.id}' does not exist.`);
      }

      return DataStore.delete(invite);
    },

    [ActionTypes.CLEAR]({ commit, dispatch }) {
      dispatch(ActionTypes.UNSUBSCRIBE);
      commit(MutationTypes.SET_SOURCES, { invites: {} });
    },
  },
};
