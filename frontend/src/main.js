import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js'
import store from './store/store.js';
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Vue.use(Button);
// Vue.use(Table);
// Vue.use(Form);
// Vue.use(TableColumn);
// Vue.use(Popover);
// Vue.use(Tooltip);
// Vue.use(Container);
// Vue.use(Dialog);

Vue.config.productionTip = false

export const bus = new Vue();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
