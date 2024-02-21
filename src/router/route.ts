import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/basic-1",
  },
  {
    path: "/basic-1",
    name: "HelloWorld",
    component: () => import("../components/vueExample/HelloWorld.vue"),
  },
  {
    path: "/basic-2",
    name: "HandlingUserInput",
    component: () => import("../components/vueExample/HandlingUserInput.vue"),
  },
  {
    path: "/basic-3",
    name: "AttributeBindings",
    component: () => import("../components/vueExample/AttributeBindings.vue"),
  },
  {
    path: "/basic-4",
    name: "ConditionalsAndLoops",
    component: () =>
      import("../components/vueExample/ConditionalsAndLoops.vue"),
  },
];

export default routes;
