import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";

Vue.use(VueRouter)

export default new VueRouter({
    //配置路由
    routes: [
        {
            path: '/home',
            component: Home //注册路由组件
        },
        {
            path: '/about',
            component: About
        }
    ]
})