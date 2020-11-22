import Vue from 'vue';
import Vuex from 'vuex';
import AuthStore from '@/store/auth';
import ManagerScheduleStore from '@/store/managerSchedule';
import userscheduleStore from '@/store/userSchedule';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authStore: AuthStore,
    managerScheduleStore: ManagerScheduleStore,
    userscheduleStore: userscheduleStore,
  },
});