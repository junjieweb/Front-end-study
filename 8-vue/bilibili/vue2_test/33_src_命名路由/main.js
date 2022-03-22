import Vue from 'vue';
import App from './App.vue';
//引入VueRouter
import VueRouter from 'vue-router'

import router from './router'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: (h) => h(App),
});