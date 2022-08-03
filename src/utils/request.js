import { Message } from 'element-ui'
import store from '@/store'
import axios from 'axios'
// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
// 请求拦截器
service.interceptors.request.use((config) => {
  if (store.state.user.token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  return config
})

service.interceptors.response.use((res) => {
  if (res.config.url === '/api/user-service/user/login') {
    const { success, token, msg } = res.data
    if (success) {
      return token
    }
    Message.error(msg)
    return Promise.reject(new Error(msg))
  }
  return res // eslint-disable-next-line
}, function (error) {
  // 对响应错误做点什么
  Message.error('系统异常')
  return Promise.reject(error)
}) // 响应拦截器
export default service // 导出axios实例
