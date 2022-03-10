import {reqAddOrUpdateCart, reqCartList} from "@/api";


const state = {
    shopCartList: []
}

const mutations = {
    RECEIVE_SHOP_CART_LIST(state, shopCartList) {
        state.shopCartList = shopCartList
    }
}

const actions = {
    //添加或更新购物车
    async addOrUpdateCart({commit}, {skuId, skuNum}) {
        const result = await reqAddOrUpdateCart(skuId, skuNum)

        //如果和下面写法一样，那么这个异步函数返回的promise只用成功
        /*if (result.code === 200){
            return 'ok'
        }else {
            return 'failed'
        }*/

        //下面的写法可以让promise有成功也有失败
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },

    //获取购物车列表
    async getCartList({commit}) {
        const result = await reqCartList()
        if (result.code === 200) {
            commit('RECEIVE_SHOP_CART_LIST', result.data)
        }
    }
}

const getters = {
    shopCartList(state) {
        return state.shopCartList[0] || {}
    }
}

export default {
    namespace: true,
    state,
    mutations,
    actions,
    getters
}