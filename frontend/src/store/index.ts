import { createStore } from "vuex";
import * as users from './users';
import * as jobs from './jobs';
import * as sources from './sources';

import Vue from 'vue';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [users.NAMESPACE]: users.module,
    [jobs.NAMESPACE]: jobs.module,
    [sources.NAMESPACE]: sources.module,

  },
});
