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
  {
    path: "/basic-5",
    name: "FormBindings",
    component: () => import("../components/vueExample/FormBindings.vue"),
  },
  {
    path: "/basic-6",
    name: "SimpleComponent",
    component: () => import("../components/vueExample/SimpleComponent.vue"),
  },
  {
    path: "/practical-1",
    name: "MarkdownEditor",
    component: () => import("../components/vueExample/MarkdownEditor.vue"),
  },
  {
    path: "/practical-2",
    name: "FetchingData",
    component: () => import("../components/vueExample/FetchingData.vue"),
  },
  {
    path: "/practical-3",
    name: "Grid",
    component: () => import("../components/vueExample/Grid.vue"),
  },
  {
    path: "/practical-4",
    name: "Tree",
    component: () => import("../components/vueExample/TreeView.vue"),
  },
  {
    path: "/practical-5",
    name: "svg",
    component: () => import("../components/vueExample/SvgGraph.vue"),
  },
  {
    path: "/practical-6",
    name: "modal",
    component: () => import("../components/vueExample/ModalView.vue"),
  },
  {
    path: "/practical-7",
    name: "List",
    component: () => import("../components/vueExample/ListView.vue"),
  },
  {
    path: "/practical-8",
    name: "Todo",
    component: () => import("../components/vueExample/TodoView.vue"),
  },
  {
    path: "/gui-1",
    name: "Counter",
    component: () => import("../components/vueExample/Counter.vue"),
  },
  {
    path: "/gui-2",
    name: "TemperatureView",
    component: () => import("../components/vueExample/TemperatureView.vue"),
  },
  {
    path: "/gui-3",
    name: "FightBooker",
    component: () => import("../components/vueExample/FightBooker.vue"),
  },
  {
    path: "/gui-4",
    name: "Timer",
    component: () => import("../components/vueExample/Timer.vue"),
  },
  {
    path: "/gui-5",
    name: "CRUD",
    component: () => import("../components/vueExample/CRUD.vue"),
  },
  {
    path: "/gui-6",
    name: "Circle",
    component: () => import("../components/vueExample/CircleDrawer.vue"),
  },
  {
    path: "/gui-7",
    name: "Cell",
    component: () => import("../components/vueExample/Cells.vue"),
  },
];

export default routes;
