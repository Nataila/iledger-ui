import Vue from "vue";
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
import Framework7Theme from 'framework7/css/framework7.bundle.css'

Framework7.use(Framework7Vue);

import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
