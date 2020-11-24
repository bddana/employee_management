import Vue from "vue";
import Router from "vue-router";
import Landing from "@/views/Landing";
import About from "@/views/About";
import Schedule from "@/views/Schedule";
import User from "@/views/User";
import NotFound from "@/views/NotFound";
// import Signup from "@/views/Signup";
import Boat from "@/views/Boat";
import BoatManager from "@/views/BoatManager";
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
    },
    {
      path: '/boat',
      component: Boat,
    },
    {
      path: '/boatmanager',
      component: BoatManager,
    },
    {
      path: '/Employee',
      component: Employee,
    },
    {
      path: '/schedule',
      component: Schedule,
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


export default router;
