import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Frontegg } from '@frontegg/vue';

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
});


Vue.use(Frontegg, {
  contextOptions: {
    baseUrl: "https://app-v2cvgmmwjyc4.frontegg.com",
    clientId: "fcff4bd3-fed7-4d10-a3f1-0b1ca5e835a5",
  },
  hostedLoginBox: true,
  router,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
