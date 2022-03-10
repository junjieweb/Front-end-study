import {reqAddOrUpdateCart} from "@/api";

const state = {}

const mutations = {}

const actions = {
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
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}