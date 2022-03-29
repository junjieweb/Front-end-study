/*
* 包含应用的所有接口的接口请求函数
* 函数内部调用Ajax函数发送请求
* 函数返回的是promise对象
* */
import ajax from "@/api/ajax";
import mockAjax from "@/api/mockAjax";

// 首页三级分类
// /api/product/getBaseCategoryList  GET
export function reqCategoryList() {
    // return ajax.get('/product/getBaseCategoryList')
    // return ajax('/product/getBaseCategoryList') //发不带参数的get请求
    return ajax({
        url: '/product/getBaseCategoryList',
        // method: 'get'
    })
}

//获取首页广告轮播列表 /api/cms/banner GET
export const reqBannerList = () => ajax('/cms/banner')

//mock接口函数
export const reqRecommends = () => mockAjax('/recommends')
export const reqFloors = () => mockAjax('floors')

//搜索分页列表    /api/list  POST
export const reqSearch = (searchParams) => ajax.post('/list', searchParams)

//获取详情数据   /api/item/{ skuId }  GET
export const reqDetailInfo = (skuId) => {
    return ajax({
        url: `/item/${skuId}`,
        method: 'get'
    })
}

//添加购物车（修改购物车的商品数量）
//  /api/cart/addToCart/{ skuId }/{ skuNum }    POST
export const reqAddOrUpdateCart = (skuId, skuNum) => {
    return ajax({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}

//获取购物车列表
//    /api/cart/cartList
//    get
export const reqCartList = () => {
    return ajax({
        url: "/cart/cartList",
        method: 'get'
    })
}

//修改购物车的选中状态
//  /api/cart/checkCart/{skuID}/{isChecked}
//   get
export const reqUpdateCartChecked = (skuID, isChecked) => {
    return ajax({
        url: `/cart/checkCart/${skuID}/${isChecked}`,
        method: 'get'
    })
}

//删除购物车
//  /api/cart/deleteCart/{skuId}
//   DELETE
export const reqDeleteCart = (skuId) => {
    return ajax({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}

//获取验证码
//  /api/user/passport/sendCode/{phone}
//  get
export const reqGetCode = (phone) => {
    return ajax({
        url: `/user/passport/sendCode/${phone}`,
        method: 'get'
    })
}

//注册
//  /api/user/passport/register
//  post
export const reqUserRegister = (userInfo) => {
    return ajax({
        url: '/user/passport/register',
        method: 'post',
        data: userInfo
    })
}

//登录
// /api/user/passport/login
// post
export const reqUserLogin = (userInfo) => {
    return ajax({
        url: '/user/passport/login',
        method: 'post',
        data: userInfo
    })
}

//获取用户信息【需要带着用户的token向服务器要用户信息】
//  /api/user/passport/auth/getUserInfo
//  method:get
export const reqUserInfo = () => {
    return ajax({
        url: '/user/passport/auth/getUserInfo',
        method: 'get'
    })
}

//退出登录
//  /api/user/passport/logout
//  get
export const reqUserLogout = () => {
    return ajax({
        url: '/user/passport/logout',
        method: 'get'
    })
}

//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = () => {
    return ajax({
        url: '/user/userAddress/auth/findUserAddressList',
        method: 'get'
    })
}

//获取交易页面信息
//  /api/order/auth/trade
//  get
export const reqTradeInfo = () => {
    return ajax({
        url: '/order/auth/trade',
        method: 'get'
    })
}

//提交订单
//  /api/order/auth/submitOrder?tradeNo={tradeNo}
//  post
export const reqSubmitOrder = (tradeNo, tradeData) => {
    return ajax({
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method: 'post',
        data: tradeData
    })
}

//获取支付信息
//  /api/payment/weixin/createNative/{orderId}
//  get
export const reqPayInfo = (orderId) => {
    return ajax({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'get'
    })
}

//查询订单支付状态
//  /api/payment/weixin/queryPayStatus/{orderId}
//  get
export const reqPayStatus = (orderId) => {
    return ajax({
        url: `/payment/weixin/queryPayStatus/${orderId}`,
        method: 'get'
    })
}

//请求获取我的订单数据分页列表
//  /api/order/auth/{page}/{limit}
//  get
export const reqMyOrderInfo = (page, limit) => {
    return ajax({
        url: `/order/auth/${page}/${limit}`,
        method: 'get'
    })
}