// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
// 应用Vuex插件
Vue.use(Vuex)

// 准备state——用于存储数据
const state = {
    sum: 0, // 当前的和
    school: 'bilibili',
    subject: '前端',
    personList: [
        {id: '001', name: 'tom'}
    ]
}

// 准备actions——用于响应组件中的动作
// 这个里面的方法可以包含if for 异步
const actions = {
    incrementOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 500);
    }
}

// 准备mutations——用于操作数据（state）
// 这个里面的方法不能包含 if for 异步，是直接操作的
const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}

// 准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
