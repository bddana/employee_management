import ProxyUrls from '@/constants/proxyUrls';
import Vue from 'vue';

export default {
    async addSchedule(payload) {
        console.log("addSchedule");
        if (!payload) return null;
        console.log(payload);
        try {
            const { data } = await Vue.prototype.$axios({
                method: 'post',
                url: ProxyUrls.scheduleaddOne,
                data: payload,
            });
            console.log("addSchedule done");

            if (data && data.httpStatus === 200) {
                return true;
            }
            return false;
        } catch (err) {
            throw new Error(err);
        }
    },

    async getAllSchedule() {
        console.log("scheduleFindall");
        try {
            const { data } = await Vue.prototype.$axios({
                method: 'get',
                url: ProxyUrls.scheduleFindall,
            });
            console.log("find all done", JSON.stringify(data));
            
            if (data && data.httpStatus === 200) {
                return JSON.stringify(data);
            }
            return false;
        } catch (err) {
        console.log("schedule failed");

            throw new Error(err);
        }
    },

};