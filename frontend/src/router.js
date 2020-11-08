import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  { path: "/", component: "Landing" },
  { path: "/about", component: "About" },
  { path: "/schedule", component: "Schedule" },
  { path: "/login", component: "Login" },
  { path: "/signup", component: "Signup" },
  { path: "/boat", component: "Boat" },
  { path: "/employee", component: "Employee" },
  // { path: "/home", component: "Home", meta: { requiresAuth: true } },
  { path: "*", component: "NotFound" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`./views/${route.component}.vue`)
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});
