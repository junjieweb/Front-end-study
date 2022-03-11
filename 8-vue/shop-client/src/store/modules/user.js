//管理登录用户数据的vuex子模块
import {getUserTempId, setToken, getToken, removeToken} from "@/utils/userabout";
import {reqGetCode, reqUserLogin, reqUserRegister} from "@/api";

const state = {
    code: '',
    //getUserTempId() 获取用户临时标识id
    userTempId: getUserTempId(),
    token: getToken(),//先从localStorage当中获取token
}
const mutations = {
    GET_CODE(state, code) {
        state.code = code
    },
    RECEIVE_TOKEN(state, token) {
        state.token = token
    }
}
const actions = {
    //获取验证码
    async getCode({commit}, phone) {
        //获取验证码的这个接口：把验证码返回，但是正常情况，后台把验证码发到用户手机上【省钱】
        let result = await reqGetCode(phone);
        if (result.code === 200) {
            commit("GET_CODE", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //注册
    async userRegister({commit}, userInfo) {
        const result = await reqUserRegister(userInfo)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },

    //登录
    async userLogin({commit}, userInfo) {
        const result = await reqUserLogin(userInfo)
        if (result.code === 200) {
            commit('RECEIVE_TOKEN', result.data.token)
            setToken(result.data.token)
            // 这里要写返回值，之前我们存数据没有写return  是因为后续没有其它的不同操作
            //这个需要写，是因为登录不但要存储token数据，而且要根据登录成功还是失败决定下一步往哪跳
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