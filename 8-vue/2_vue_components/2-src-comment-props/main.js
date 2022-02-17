/*
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')*/

import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})
