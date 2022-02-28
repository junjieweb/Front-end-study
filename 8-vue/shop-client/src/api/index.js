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