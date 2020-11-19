import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js'
import store from './store/store.js';
import axios from 'axios';

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



import VueAxios from 'axios';
Vue.prototype.$http=VueAxios.create({
  baseURL:'http://localhost:8081'
})



import { Button, Table, Form, TableColumn, Popover, Tooltip } from "element-ui";
Vue.use(Button);
Vue.use(Table);
Vue.use(Form);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tooltip);

// Vue.use(Button);
// Vue.use(Table);
// Vue.use(Form);
// Vue.use(TableColumn);
// Vue.use(Popover);
// Vue.use(Tooltip);
// Vue.use(Container);
// Vue.use(Dialog);

const baseURL = process.env.VUE_APP_API_BASE_URL;
const instance = axios.create({
  baseURL,
  withCredentials: true
});

console.log("creating axios");
Vue.prototype.$axios = instance;
//>>>>>>> 47fda0b3f96a178621148a3968ef7b11824f1ba8
Vue.config.productionTip = false

export const bus = new Vue();
axios.defaults.headers.post['Content-Type'] = 'application/json';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
