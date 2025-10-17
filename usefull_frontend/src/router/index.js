import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import { useUserStore } from "../stores/authStore";



const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true },},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, next) => {
  const userStore = useUserStore();

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !userStore.token) {
    next("/login");
  } else {
    next();
  }
});


export default router;
