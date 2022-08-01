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
      const { data } = await login(payLoad)
      console.log(data)
      if (data.success) commit('setToken', data.token)
      return data
    }
  },
  getters: {
    // 映射
  }
}
