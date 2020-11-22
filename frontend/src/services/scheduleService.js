import ProxyUrls from '@/constants/proxyUrls';
import Vue from 'vue';

export default {
    async addSchedule(payload) {
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
    async updateSchedule(payload) {
        if (!payload) return null;
        console.log(payload);
        try {
            const { data } = await Vue.prototype.$axios({
                method: 'post',
                url: ProxyUrls.scheduleupdateOne,
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
};