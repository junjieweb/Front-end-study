import Vue from "vue";
import App from "./App";
// 完整引入 ElementUI
// 全局引入并注册组件库当中定义好的各个组件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//
// Vue.use(ElementUI)

// 按需引入 ElementUI
// 全局引入部分的element-ui组件并且进行全局注册
// element-ui当中的组件分为两大类：按使用方式区分：组件标签形式的组件 和 js代码形式的组件
import {Button} from 'element-ui';

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')