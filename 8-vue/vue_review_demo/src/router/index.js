import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";

Vue.use(VueRouter)
// 1.生成路由器
const router = new VueRouter({
    routes
})

export default router
