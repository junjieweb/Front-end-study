import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import About from "../views/About";
import Message from "../views/Message";
import News from "../views/News";
import MessageDetail from "../views/MessageDetail";
import NewsDetail from "../views/NewsDetail";

Vue.use(VueRouter)

export default new VueRouter({
    node: 'history',
    // 配置路由
    routes: [
        {
            path: '/home',
            component: Home, // 注册路由组件
            // 子路由（二级路由）
            children: [
                {
                    path: 'message',
                    component: Message,
                    // 子路由（三级路由）
                    children: [{
                        // :msgid是用来接收路径传过来的params参数
                        path: 'msgdetail/:msgid',
                        component: MessageDetail,
                        name: 'msgdetail', //命名路由
                        // props:true
                        // props: {name: 'tom'}
                        props(route) {
                            return {msgid: route.params.msgid, content: route.query.content}
                        }
                        // 1.如果写的是布尔值，值为true代表会把传递过来的路径中的params参数映射为要显示的组件当中属性去使用
                        // 2.如果写对象,props是用来把需要自己额外传递的静态数据传映射为组件当中的属性，这个对象用法只能传递一些自己添加的额外数据
                        // 3.如果写函数，可以让我们自己把params参数和query参数一起映射为组件当中的属性

                        // 匹配的同时把参数给解析出来，添加到当前这个路由对象中（理解）
                        /*params:{
                            msgid:1
                        },
                        query:{
                            content:message01
                        }*/
                    }]
                },
                {
                    path: 'news',
                    component: News,
                    children: [{
                        path: 'newsdetail/:newsid',
                        component: NewsDetail,
                        name: 'newsdetail'
                    }]
                },
                {
                    path: '',
                    redirect: 'message'
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            //重定向路由
            path: '/',
            redirect: '/home'
        }
    ]
})
