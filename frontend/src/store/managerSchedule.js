import ProxyUrls from '@/constants/proxyUrls';
import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        events: [],
    },
    actions: {
        async getAllSchedule({ commit }) {
            try {
                const { data } = await Vue.prototype.$axios({
                    method: 'get',
                    url: ProxyUrls.scheduleFindall,
                });
                
                if (data) {
                    commit('setEvents', data);
                }
                return data;
            } catch (err) {
                throw new Error(err);
            }
        },

        async getAllEmployee({ commit }) {
            try {
                const { data } = await Vue.prototype.$axios({
                    method: 'get',
                    url: ProxyUrls.scheduleFindall,
                });
                
                if (data) {
                    commit('setEvents', data);
                }
                return data;
            } catch (err) {
                throw new Error(err);
            }
        },

        async addSchedule(payload) {
            if (!payload) return null;
            console.log(payload);
            try {
                const { data } = await Vue.prototype.$axios({
                    method: 'post',
                    url: ProxyUrls.scheduleaddOne,
                    data: payload,
                });
    
                if (data && data.httpStatus === 200) {
                    return true;
                }
                return false;
            } catch (err) {
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
    }
};