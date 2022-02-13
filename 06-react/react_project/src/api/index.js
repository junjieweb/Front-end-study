//统一管理项目中所有的ajax请求
import ajax from './ajax'

//请求验证码
export const reqVerifyCode = phone => 
	ajax.post('/login/digits',{phone})

//请求登录
export const reqLogin = (phone,code) => 
	ajax.post('/login/phone',{phone,code})

//请求校验用户身份
export const reqVerifyToken = () => 
	ajax.post('/login/verify')

//请求校验用户身份
export const reqLogout = (_id) => 
	ajax.post('/logout',{_id})