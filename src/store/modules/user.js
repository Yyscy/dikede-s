import { login } from '@/api/user'
import { setToken, getToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: getToken()
  },
  mutations: {
    setToken(atate, payLoad) {
      atate.token = payLoad
      setToken(payLoad)
    }
  },
  actions: {
    async gitToken({ commit }, payLoad) {
      const data = await login(payLoad)
      console.log(1, data)
      commit('setToken', data.token)
    }
  },
  getters: {
    // 映射
  }
}
