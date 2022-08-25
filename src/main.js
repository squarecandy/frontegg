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
    clientId: "a50267e3-80f2-48a3-ab1e-5d0c8cacf849",
  },
  hostedLoginBox: true,
  router,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
