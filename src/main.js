import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/tailwind.css';
// Globally register all `Base` prefixed components
import './components/globals';

// VueFormulate
import './forms';
import { getSchema } from '@/forms/schemas';

Vue.mixin({
  methods: {
    getSchema
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
