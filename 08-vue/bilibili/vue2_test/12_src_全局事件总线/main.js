import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

new Vue({
    el: '#app',
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
    render: (h) => h(App),
});