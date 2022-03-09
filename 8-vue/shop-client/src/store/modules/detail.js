import {reqDetailInfo} from "@/api";

const state = {
    skuDetailInfo: {}
}

const mutations = {
    RECEIVE_SKU_DETAIL_INFO(state, skuDetailInfo) {
        state.skuDetailInfo = skuDetailInfo
    }
}

const actions = {
    async getSkuDetailInfo({commit}, skuId) {
        const result = await reqDetailInfo(skuId)
        if (result.code === 200) {
            commit('RECEIVE_SKU_DETAIL_INFO', result.data)
        }
    }
}

const getters = {
    categoryView(state) {
        return state.skuDetailInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.skuDetailInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.skuDetailInfo.spuSaleAttrList || []
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}