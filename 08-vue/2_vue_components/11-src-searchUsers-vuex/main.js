import Vue from "vue";
import App from "./App";
import store from './store'

Vue.config.productionTip = false

new Vue({
    /*beforeCreate() {
        Vue.prototype.$bus = this
    },*/
    store,
    render: h => h(App)
}).$mount('#app')