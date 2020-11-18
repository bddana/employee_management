import Vue from "vue";
import Router from "vue-router";
import Landing from "@/views/Landing";
import About from "@/views/About";
import Schedule from "@/views/Schedule";
import User from "@/views/User";
import NotFound from "@/views/NotFound";
// import Signup from "@/views/Signup";
import Boat from "@/views/Boat";
import Employee from "@/views/Employee";
import VacationReport from "@/views/VacationReport";
// import ScheduleReport from "@view/SchedReport";


Vue.use(Router);

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Landing,
      children: [
      ],
    },
    {
      path: '/boat',
      component: Boat,
    },
    {
      path: '/Employee',
      component: Employee,
    },
    {
      path: '/schedule',
      component: Schedule,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user',
      component: User,
    },

    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/VacationReport',
      component: VacationReport,
    },
    {
      path: '/SchedReport1',
      component: function(){
        return import('./views/ScheduleReport1.vue')
      }, 
    },

    {
      path: '/BoatStatusReport',
      component: function(){
        return import('./views/BoatStatusReport.vue')
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const authenticatedUser = null;
  const authenticatedUser2 = (localStorage.getItem('email') === 'undefined');
  console.log(`router before each to ${requiresAuth} and ${authenticatedUser2}`);

  // Check for protected route
  if (requiresAuth && authenticatedUser2) next('user')
  else next();
});

export default router;
