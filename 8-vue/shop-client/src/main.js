import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "@/components/TypeNav";

Vue.config.productionTip = false

//注册全局组件
Vue.component(TypeNav.name, TypeNav)

new Vue({
    render: h => h(App),
    //注册路由器 ==> 所有组件都可以直接访问两个对象：$router $route
    router
}).$mount('#app')
