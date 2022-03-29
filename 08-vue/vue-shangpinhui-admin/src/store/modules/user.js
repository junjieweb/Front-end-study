import { getInfo, login, logout } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
import router, { anyRoutes, asyncRoutes, constantRoutes, resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(), // 获取token
    name: '', // 存储用户名
    avatar: '', // 存储用户头像
    // 保存服务器返回的异步路由标记
    serveAsyncRouteFlag: [],
    // 按钮
    buttons: [],
    // 角色
    roles: [],
    // 将来要存储当前用户（角色），需要展示的全部路由
    routes: []
  }
}

const state = getDefaultState()

const mutations = {
  // 重置state
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  // 设置token
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // 存储用户信息
  SET_USER_INFO: (state, userInfo) => {
    state.name = userInfo.name
    state.avatar = userInfo.avatar
    state.buttons = userInfo.buttons
    state.roles = userInfo.roles
    // 保存服务器返回的异步路由标记【数组:元素字符串】
    state.serveAsyncRouteFlag = userInfo.routes
  },
  // 计算出的异步路由
  SET_ROUTES: (state, params) => {
    // 保存用户需要展示全部路由
    // params:计算完毕异步路由
    // 计算出即为当前用户需要展示全部路由
    state.routes = constantRoutes.concat(params, anyRoutes)
    // 需要给路由器动态添加路由
    router.addRoutes([...params, anyRoutes])
  }
}

// 定义一个函数:计算出当前用户需要展示异步路由
function findUserAsyncRoutes(asyncRoutes, serveFlag) {
  // 用户需要展示的异步路由
  return asyncRoutes.filter(item => {
    // 判断路由曾经起的名字在serveFlag中是否出现，如果出现->要
    if (serveFlag.indexOf(item.name) !== -1) {
      // 内层判断：判断子集路由
      if (item.children && item.children.length > 0) {
        // 递归判断子路由的名字是否在serveFlag数组当中出现
        item.children = findUserAsyncRoutes(item.children, serveFlag)
      }
      return true
    }
  })
}

const actions = {
  // user login 处理登录业务
  async login({ commit }, userInfo) {
    // 解构出用户名和密码
    const { username, password } = userInfo
    const result = await login({ username: username.trim(), password: password })
    // 注意：当前登录请求现在使用mock数据，mock数据code是20000
    if (result.code === 20000) {
      // vuex存储token
      commit('SET_TOKEN', result.data.token)
      // 本地持久化存储token
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },

  // get user info 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response
        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        commit('SET_USER_INFO', data)
        commit('SET_ROUTES', findUserAsyncRoutes(asyncRoutes, data.routes))
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

