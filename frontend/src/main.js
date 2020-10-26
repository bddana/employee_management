import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js'
import store from './store/store.js';
import { Button, Table, Form, TableColumn, Popover, Tooltip } from "element-ui";
Vue.use(Button);
Vue.use(Table);
Vue.use(Form);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tooltip);

Vue.config.productionTip = false

export const bus = new Vue();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
