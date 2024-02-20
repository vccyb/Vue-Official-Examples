import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./route";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
