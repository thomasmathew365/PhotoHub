import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Amlify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import config from './aws-exports';

Amlify.configure(config);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
