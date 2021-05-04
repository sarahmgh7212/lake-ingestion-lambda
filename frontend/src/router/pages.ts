import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "sources",
    name: "pages.sources",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Sources.vue"),
  },
  {
    path: "sources/:id",
    name: "pages.editSources",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/EditSources.vue"),
  },
  {
    path: "destinations",
    name: "pages.destinations",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Destinations.vue"),
  },
  {
    path: "jobs",
    name: "pages.jobs",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Jobs.vue"),
  },
  {
    path: "jobs/:id",
    name: "pages.editJobs",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/EditJobs.vue"),
  },
  {
    path: "schedule",
    name: "pages.schedule",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Schedule.vue"),
  },
  {
    path: "pipes",
    name: "pages.pipes",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Pipes.vue"),
  },
  {
    path: "pipes/:id",
    name: "pages.editPipes",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/EditPipes.vue"),
  },
  {
    path: "source-types",
    name: "pages.sourceTypes",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/SourceTypes.vue"),
  },
  {
    path: "source-types/:id",
    name: "pages.editSourceTypes",
    component: () =>
      import(
        /* webpackChunkName: "pages" */ "../views/pages/EditSourceTypes.vue"
      ),
  },
  {
    path: "users",
    name: "pages.users",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Users.vue"),
  },
  {
    path: "users/:id",
    name: "pages.editUsers",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/EditUsers.vue"),
  },
  {
    path: "teams",
    name: "pages.teams",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Teams.vue"),
  },
  {
    path: "teams/:id",
    name: "pages.editTeams",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/EditTeams.vue"),
  },
  {
    path: "logs",
    name: "pages.logs",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Logs.vue"),
  },
];

export default routes;
