import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "@/components/TypeNav";
import Pagination from "@/components/Pagination";

import store from "@/store";
import "@/plugins/swiper"; // 加载swiper的配置
import '@/plugins/element' //加载element UI配置
import "./mock/mockServer"
import * as API from '@/api'

// import 'swiper/css/swiper.min.css'; //所有组件都能用上这个样式

Vue.config.productionTip = false

//注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)

// 1) 创建或指定事件总线对象, 保存到Vue的原型上
// Vue.prototype.$bus = new Vue()

new Vue({
    render: h => h(App),
    beforeCreate() {
        // 创建或指定事件总线对象, 保存到Vue的原型上
        Vue.prototype.$bus = this
        //当不适用vuex的时候，可以把接口请求函数全部装在对象当中挂在Vue原型身上
        Vue.prototype.$API = API
    },
    router,//注册路由器 ==> 所有组件都可以直接访问两个对象：$router $route
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