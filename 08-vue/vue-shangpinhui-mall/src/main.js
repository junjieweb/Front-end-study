import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "@/components/TypeNav";
import MyPagination from "@/components/Pagination";

import store from "@/store";
import "@/plugins/swiper"; // 加载swiper的配置
import '@/plugins/element' //加载element UI配置
import '@/plugins/validate' //加载validate配置
import "./mock/mockServer"
import * as API from '@/api'

import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
    loading,  // 指定未加载得到图片之前的loading图片
})


// import 'swiper/css/swiper.min.css'; //所有组件都能用上这个样式

Vue.config.productionTip = false

//注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(MyPagination.name, MyPagination)

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