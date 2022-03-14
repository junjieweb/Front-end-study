//交易相关的用户数据的vuex子模块

import {reqAddressInfo, reqTradeInfo} from "@/api";

const state = {
    tradeInfo: {},
    address:[]
}
const mutations = {
    RECEIVE_TRADE_INFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    },
    GET_USER_ADDRESS(state,address){
        state.address = address
    }
}
const actions = {
    async getUserAddress({commit}){
      const result = await reqAddressInfo()
      if (result.code === 200 ){
          commit('GET_USER_ADDRESS',result.data)
      }
    },

    async getTradeInfo({commit}) {
        const result = await reqTradeInfo()
        if (result.code === 200) {
            commit('RECEIVE_TRADE_INFO', result.data)
        }
    }
}
const getters = {
    detailArrayList(state) {
        return state.tradeInfo.detailArrayList || []
    },
    orderDetailVoList(state) {
        return state.tradeInfo.orderDetailVoList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}