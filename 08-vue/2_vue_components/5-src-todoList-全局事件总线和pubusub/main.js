import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false

new Vue({
    beforeCreate() {
        // 配置总线，就是把vm挂到Vue的原型上，让所有的组件都能找到它，进而调用$on和$emit
        Vue.prototype.$bus = this
    },
    render: h => h(App)
}).$mount('#app')
