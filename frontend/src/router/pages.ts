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
    path: "schedule",
    name: "pages.schedule",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Schedule.vue"),
  },
  {
    path: "pipes",
    name: "pages.pipe",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Pipes.vue"),
  },
  {
    path: "source-types",
    name: "pages.sourceTypes",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/SourceTypes.vue"),
  },
  {
    path: "logs",
    name: "pages.logs",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/pages/Logs.vue"),
  },
];

export default routes;
