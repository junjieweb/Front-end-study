import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";

Vue.use(VueRouter)
// 1.生成路由器
const router = new VueRouter({
    routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('---beforeEach 全局前置守卫---')
    console.log('来自哪里：', from)
    console.log('到哪里去：', to)
    console.log(next) // 放行函数
    /*
    * 使用场景：用户是否登录身份验证
    * 需求：跳转到购物车页面需要判断用户是否登录
    *   1.如果登录就访问购物车
    *   2.如果没有登录就跳转到登录页面
    *   3.isLogin: false || true
    * */
    next()
})

// 全局解析守卫
router.beforeResolve((to, from, next) => {
    console.log('---beforeResolve 全局解析守卫---')
    next()
})

// 全局后置钩子
router.afterEach((to, from) => {
    console.log('---afterEach 全局后置钩子---', from, to)
})

export default router
