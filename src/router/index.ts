import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Start from "../pages/Start.vue";

const routes = [
  {
    path: "/",
    component: Start,
  },
  {
    path: "/tasks",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
