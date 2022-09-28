import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

const state = {
    isFirst: true,
    isLoading: false,
    errMsg: '',
    users: []
}
const mutations = {
    REQUESTING(state) {
        state.isFirst = false
        state.isLoading = true
    },
    REQUESTSUCCESS(state, users) {
        state.isLoading = false
        state.users = users
    },
    REQUESTFAIL(state, error) {
        state.isLoading = false
        state.errMsg = error.message
    }
}
const actions = {
    // 如果actions中的方法，第一个参数一定是context，就算不用也要占位
    // 第二个参数才是dispatch的时候传递过来的参数
    async searchAjax({commit}, q) {
        try {
            // 修改页面显示的状态数据，为了让页面显示正在搜索
            // this.isFirst = false
            // this.isLoading = true
            commit('REQUESTING')
            const response = await axios({
                url: 'https://api.github.com/search/users',
                method: 'get',
                params: {
                    q
                }
            })
            // this.isLoading = false
            /*
              forEach map filter some every reduce 都暗含遍历

              map
              功能：加工数组，根据已有的数据船舰新的数组，新数组中每一项和老数组当中每一项对应有关系
              参数：回调函数（item,index,arr） 每个数组项都会执行这个回调函数，返回的是一个新的项，放在新数组当中
              返回值：把每一项都返回的新项组成的新数组返回
            */
            let users = response.data.items.map(item => ({
                username: item.login,
                userurl: item.html_url,
                userimg: item.avatar_url
            }))
            commit('REQUESTSUCCESS', users)
        } catch (error) {
            // this.isLoading = false
            // this.errMsg = error.message
            // console.log(error.message)
            commit('REQUESTFAIL', error)
        }
    }
}
const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
