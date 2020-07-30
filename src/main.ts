import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { currency as currencyFn } from './support/String';

Vue.config.productionTip = false;

Vue.filter('currency', (value: number, currency: 'EUR' | 'USD') => {
  if (!value) {
    return '';
  }

  return currencyFn(value, currency);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
