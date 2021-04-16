import type { GenericObject } from "@/libs";
import { User } from "@/models";
import { DataStore, OpType } from "@aws-amplify/datastore";
import type { Module } from "vuex";
import { ActionTypes, UserMap, UsersBaseState, MutationTypes } from "./types";

export * from "./types";

export const module: Module<UsersBaseState, GenericObject> = {
  namespaced: true,

  state: {
    subscription: null,
    users: {},
  },

  getters: {
    exists: (state) => (id: string) =>
      Object.prototype.hasOwnProperty.call(state.users, id),
    getById: (state) => (id: string) => state.users[id],
  },

  mutations: {
    [MutationTypes.SET_USERS](state, { users }) {
      state.users = users;
    },

    [MutationTypes.UPSERT_USER](state, { id, user }) {
      state.users[id] = user;
    },

    [MutationTypes.DELETE_USER](state, { id }) {
      if (!Object.prototype.hasOwnProperty.call(state.users, id)) {
        throw new Error(`No user '${id}' found in users`);
      }

      delete state.users[id];
    },

    [MutationTypes.SET_SUBSCRIPTION](state, { subscription }) {
      state.subscription = subscription;
    },
  },

  actions: {
    async [ActionTypes.INIT_LIST]({ commit }) {
      const rawUsers = await DataStore.query(User);

      const users = rawUsers.reduce<UserMap>((acc: UserMap, cur: User) => {
        acc[cur.id] = cur;
        return acc;
      }, {});

      commit(MutationTypes.SET_USERS, { users });
    },

    [ActionTypes.SUBSCRIBE]({ commit }) {
      const subscription = DataStore.observe(User).subscribe((msg) => {
        const user = msg.element;

        if ([OpType.INSERT, OpType.UPDATE].includes(msg.opType)) {
          commit(MutationTypes.UPSERT_USER, { id: user.id, user });
        } else if (msg.opType === OpType.DELETE) {
          commit(MutationTypes.DELETE_USER, { id: user.id });
        } else {
          throw new Error("Unsupported operation in users subcription");
        }
      });

      commit(MutationTypes.SET_SUBSCRIPTION, { subscription });
    },

    [ActionTypes.UNSUBSCRIBE]({ state, commit }) {
      if (!state.subscription) {
        throw new Error("Users is not currently subscribed");
      }

      state.subscription.unsubscribe();

      commit(MutationTypes.SET_SUBSCRIPTION, null);
    },

    async [ActionTypes.CREATE](ctx, { user }) {
      await DataStore.save(
        new User({
          name: user.name,
          role: user.role,
        })
      );
    },

    async [ActionTypes.UPDATE]({ getters }, { id, user }) {
      const original = getters.getById(id);

      if (!original) {
        throw new Error(`User '${user.id}' does not exist.`);
      }

      await DataStore.save(
        User.copyOf(original, (updated) => {
          updated.name = user.name;
          updated.role = user.role;
        })
      );
    },

    async [ActionTypes.DELETE]({ getters }, { id }) {
      const user = getters.getById(id);

      if (!user) {
        throw new Error(`User '${user.id}' does not exist.`);
      }

      return DataStore.delete(user);
    },

    [ActionTypes.CLEAR]({ commit, dispatch }) {
      dispatch(ActionTypes.UNSUBSCRIBE);
      commit(MutationTypes.SET_USERS, { users: {} });
    },
  },
};
