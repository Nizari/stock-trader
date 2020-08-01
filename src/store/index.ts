import Vue from 'vue';
import Vuex from 'vuex';
import fundsModule from './modules/funds';
import stocksModule from './modules/stocks';
import dataModule from './modules/data';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
  },
  mutations: {},
  actions: {},
  modules: {
    fundsModule,
    stocksModule,
    dataModule,
  },
});
