import axios from 'axios'
import { ElMessage } from 'element-plus'
//创建axios实例
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // timeout: 5000
})
//请求拦截器
request.interceptors.request.use((config) => {
  return config
})
//响应拦截器
request.interceptors.response.use((response) => {
  return response.data
})
export default request
