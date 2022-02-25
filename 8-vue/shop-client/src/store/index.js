// vuex最核心的管理对象store ==> 仓库
import Vue from "vue";
import Vuex from "vuex";
import home from "@/store/modules/home";
import user from "@/store/modules/user";

Vue.use(Vuex)


//向外暴露store对象
export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters,
    modules: {
        home,
        user
    }
})

/*
vuex多模块编程的总状态结构:
{
    home: {
        categoryList: [],
        xxx: 'abc',
        yyy: 123
    },
    user: {
        userInfo: {}, // 用户信息对象
    },
}
*/