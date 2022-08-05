import { Message } from 'element-ui'
import { getTokentime } from './auth'
import router from '@/router'
import store from '@/store'
// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
// token时间
function isTimeout() {
  const CurrentTime = Date.now()
  const Tokentime = getTokentime()
  const timeout = 2 * 60 * 60 * 1000
  return CurrentTime - Tokentime > timeout
}
// 请求拦截器
service.interceptors.request.use(async(config) => {
  if (store?.getters?.token) {
    if (isTimeout()) {
      await store.dispatch('user/logout')
      router.push('/login')
      return process.reject(new Error('登录过期'))
    } else {
      // 携带Token
      config.headers.Authorization = `${store?.getters?.token}`
    }
  }
  return config
})
// 响应拦截器
service.interceptors.response.use((res) => {
  if (res.config.url === '/api/user-service/user/login') {
    const { success, msg } = res.data
    if (success) {
      return res.data
    }
    Message.error(msg)
    return Promise.reject(new Error(msg))
  }
  return res.data
},
async function(error) {
// 对响应错误做点什么
  console.log(error)
  if (error?.status === 401) {
    Message.error('登录过期')
    await store.dispatch('user/logout')
    router.push('/login')
  } else {
    Message.error(error.message)
  }
  return Promise.reject(error)
})

export default service // 导出axios实例
