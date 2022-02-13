//该文件是对axios的二次封装，目的是：统一处理请求的错误，返回服务器的纯数据
import axios from 'axios';
import {Toast} from 'antd-mobile';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

//使用axios的请求拦截器
axios.interceptors.request.use((config)=>{
	NProgress.start() //进度条开始
	return config
})

//使用axios的响应拦截器
axios.interceptors.response.use(
	response => {
		NProgress.done() //进度条结束
		return response.data
	},
	error => { //如果状态码不是2开头，就会进入该回调
		NProgress.done() //进度条结束
		Toast.fail(error.message)
		return new Promise(()=>{})
	}
)

export default axios