import Vue from 'vue';
import App from './App';
import router from './router'
import store from './vuex/store.js';


Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
