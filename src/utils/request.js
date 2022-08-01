import axios from 'axios'
// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
// 请求拦截器
service.interceptors.request.use()

// 响应拦截器
service.interceptors.response.use()

export default service // 导出axios实例
