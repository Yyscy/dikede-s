import { login, userInfo } from '@/api/user'
import { setTokentime } from '@/utils/auth'
// import router from '@/router'
export default {
  namespaced: true,
  state: {
    token: '',
    loginInfo: {},
    userInfo: {}
  },
  mutations: {
    // 获取token
    setToken(state, payLoad) {
      state.token = payLoad.token
      state.loginInfo = payLoad
    },
    // 个人信息
    setuserInfo(state, payLoad) {
      state.userInfo = payLoad
    }
  },
  actions: {
    // 获取token
    async gitToken({ commit }, payLoad) {
      const data = await login(payLoad)
      commit('setToken', data)
      setTokentime()
    },
    // 个人信息
    async gituserInfo({ commit }, payLoad) {
      const data = await userInfo(payLoad)
      commit('setuserInfo', data)
    },
    // 退出登录
    logout({ commit }) {
      commit('setToken', '')
      commit('setuserInfo', {})
    }
  },
  getters: {
    // 映射
  }
}
