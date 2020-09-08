import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/tailwind.css';
// Globally register all `Base` prefixed components
import './components/globals';

// VueFormulate
import './forms';
// import { getFormSchema } from '@/forms/formSchemas';

// Vue.mixin({
//   computed: {
//     formName() {
//       // The form schema is used as the form's name, please don't change schema name.
//       return this.$route.meta.schema;
//     },
//     formSchema() {
//       return getFormSchema(this.formName);
//     }
//   },
//   methods: {
//     submit(data) {
//       this[this.formName](data);
//     }
//   }
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
