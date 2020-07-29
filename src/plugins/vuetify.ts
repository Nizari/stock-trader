import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#8bc34a',
        secondary: '#cddc39',
        accent: '#ffeb3b',
        error: '#f44336',
        warning: '#ffc107',
        info: '#03a9f4',
        success: '#4caf50',
      },
    },
  },
});
