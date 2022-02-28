import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "@/components/TypeNav";
import store from "@/store";
import "@/plugins/swiper"; // 加载swiper的配置
import "./mock/mockServer"

// import 'swiper/css/swiper.min.css'; //所有组件都能用上这个样式

Vue.config.productionTip = false

//注册全局组件
Vue.component(TypeNav.name, TypeNav)

new Vue({
    render: h => h(App),
    //注册路由器 ==> 所有组件都可以直接访问两个对象：$router $route
    router,
    store, //注册vuex ==> 所有组件都可以直接访问一个对象：$store
}).$mount('#app')

/*
store对象的功能：
    读取数据：
        store.state.xxx
        store.getters.xxx
    更新数据
        store.dispatch(action名称, data)
        store.commit(mutation名称, data)
*/