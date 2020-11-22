import ProxyUrls from '@/constants/proxyUrls';
import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        events: [],
    },
    actions: {
        async getAllSchedule({ commit }, user) {
            console.log("get all user", user)
            try {
                const { data } = await Vue.prototype.$axios({
                    method: 'post',
                    url: ProxyUrls.scheduleFindallUser,
                    data: user
                });
                
                if (data) {
                    commit('setEvents', data);
                }
                return data;
            } catch (err) {
                console.log("schedule failed");
                throw new Error(err);
            }
        },
    },
    mutations: {
        setEvents(state, data) {
            state.events = data;
        },
    },
    getters:{
        getEvents(state) {
            return state.events;
        },
    },
}