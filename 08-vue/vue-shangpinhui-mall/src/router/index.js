//路由器对象
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import store from "@/store";
//安装Vue插件
Vue.use(VueRouter)

// 缓存原本的push方法
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// 指定新的push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    // console.log('push', onResolve, onReject)
    // 如果指定了成功或失败的回调
    if (onResolve || onReject) {
        // 直接调用原本的push方法
        // originalPush(location, onResolve, onReject)  // this不是router而是undefined
        return originalPush.call(this, location, onResolve, onReject)
    }
    // 没有指定成功或失败回调, 必须用catch处理
    return originalPush.call(this, location).catch((err) => {
        // 如果是重复导航产生的错误, 不再向外传递错误
        if (VueRouter.isNavigationFailure(err)) {
            // resolve err
            return err  // 产生的是成功的promise, 成功promise的value是err
        }
        // 如果是其它原因导航的错误, 将错误向下传递
        // throw error
        return Promise.reject(err)
    })
}

VueRouter.prototype.replace = function (location, onResolve, onReject) {
    // console.log('replace', onResolve, onReject)
    if (onResolve || onReject) {
        return originalReplace.call(this, location, onResolve, onReject)
    }
    return originalReplace.call(this, location).catch((err) => {
        if (VueRouter.isNavigationFailure(err)) {
            return err
        }
        return Promise.reject(err)
    })
}

//向外暴露路由器对象
const router = new VueRouter({
    //模式
    mode: 'history',//不带#
    //应用中的所有路由
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})

//token校验逻辑
router.beforeEach(async (to, from, next) => {
    // 全局前置导航守卫
    // to 代表准备去的地方的路由对象
    // from 从哪个地方来的路由对象
    // next是一个函数
    // next()  代表无条件放行
    // next(false) 代表不放行，停在原地
    // next('/')  next({path:'/'})  代表最终让它去哪

    //token校验
    let token = store.state.user.token
    if (token) {
        //代表登录了或者之前登录过
        if (to.path === '/login') {
            //登录过了,又想去登录页,直接跳转到首页
            next('/')
        } else {
            let hasUserInfo = !!store.state.user.userInfo.nickName
            if (hasUserInfo) {
                //此时代表登录了，去的不是登录页，用户信息存在,直接无条件放行
                next()
            } else {
                //此时代表登录了，去的不是登录页，用户信息不存在 那我们要根据token发请求获取用户的真实信息
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (e) {
                    alert('用户的token过期')
                    await store.dispatch('resetUserInfo')
                    //去到之前想去但是没有去成的地方,需要和登录逻辑去配合使用
                    next('/login?redirect=' + to.path)
                }
            }
        }
    } else {
        //代表用户没登录或者之前也没登录过
        //后期我们需要判断用户是不是去订单相关的页面，如果是那么就先登录

        // 1、交易相关的    支付相关的   用户中心相关的  都要登录才能访问
        if (to.path.indexOf('/trade') === 0 || to.path.startsWith('/pay') || to.path.startsWith('/center')) {
            next('/login?redirect=' + to.path)
        } else {
            next()
        }
    }
})

export default router
