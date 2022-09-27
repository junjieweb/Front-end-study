// 1.安装
// 2.引入并声明使用vuex插件
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

// 3.向外暴露一个store的实例化对象
// state是一个包含多个属性（不是方法）的对象，其实就是用来存储数据的
const state = {
    count: 0
}

// mutations也是一个对象，是一个包含了多个方法的对象，其实就是用这个里面的方法去直接操作数据的
// 这个里面的方法不能包含 if for 异步，是直接操作的
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

// actions也是一个对象，是一个包含了多个方法的对象。这个对象内部的方法是用来和vue当中用户的操作去关联的
// 这个里面的方法可以包含if for 异步
const actions = {
    // context  上下文对象，本质其实就是store对象
    increment(context) {
        context.commit('INCREMENT')
    },
    decrement({commit}) {
        commit('DECREMENT')
    },
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 1000)
    },
    incrementIfOdd({commit, state}) {
        if (state.count % 2 !== 0) {
            commit('INCREMENT')
        }
    }
}

// getters也是一个对象，是一个包含了多个方法的对象。这个对象内部的每个方法对应了一个计算属性的get，就是
// 通过state当中的已有数据 计算出来的一个新的想要使用的属性数据
const getters = {}

// 3.向外暴露一个store的实例化对象
export default new Vuex.Store({
    // 包含6个核心概念，现在讲4个
    state,
    mutations,
    actions,
    getters
})

// 4.将暴露出去的store实例化对象引入到实例化Vue的配置对象当中使用
