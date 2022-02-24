//路由器对象
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
//安装Vue插件
Vue.use(VueRouter)

//向外暴露路由器对象
export default new VueRouter({
    //模式
    mode: 'history',//不带#
    //应用中的所有路由
    routes
})