import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import { getLang as getLang} from './utils/lang/lang.js';

Vue.use(Vuex);

const state = {
    weather: "weather",
    coords: "coords",
    status: 'INIT',
    activeDay: 0,
    theme: null,
    units: null,
    language: null,
    lang: null
  };

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters,
  actions,
});

export default store;