/*
axios二次封装
    1. 配置通用的基础路径和超时
    2. 显示请求进度条
    3. 成功返回的数据不再是response, 而直接是响应体数据response.data
    4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/
import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css"
import store from "@/store";

//1. 配置通用的基础路径和超时
// service是一个能发任意ajax请求的函数, 当然可以作为对象使用
const service = axios.create({
    // baseURL: 'http://39.99.186.36/api',//基础路径
    baseURL: '/api',//基础路径
    timeout: 5000,//超时时间
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    //2. 显示请求进度条 在请求拦截器中
    NProgress.start()

    //携带临时标识
    let userTempId = store.state.user.userTempId
    if (userTempId) {
        config.headers.userTempId = userTempId
    }

    //携带登录后标识token
    let token = store.state.user.token
    if (token) {
        config.headers.token = token
    }

    // 必须返回config
    return config // 后面就会根据返回的config，使用xhr对象发Ajax请求
})

// 添加响应拦截器
service.interceptors.response.use(
    response => { // 请求成功返回的回调
        //隐藏请求进度条：在响应拦截器成功的回调中
        NProgress.done()

        //3. 成功返回的数据不再是response, 而直接是响应体数据response.data
        return response.data
    },
    error => { // 请求失败返回的回调
        //隐藏请求进度条：在响应拦截器失败的回调中
        NProgress.done()
        //4. 统一处理请求错误, 具体请求也可以选择处理或不处理
        alert(error.message || '未知的请求错误')

        // throw error
        return Promise.reject(error)
    }
)

//向外暴露 service
export default service