import Vue from 'vue';
import Vuex from 'vuex';
import funds from './modules/funds';
import stocks from './modules/stocks';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
  },
  mutations: {},
  actions: {},
  modules: {
    funds,
    stocks,
  },
});
