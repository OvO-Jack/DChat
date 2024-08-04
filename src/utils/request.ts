import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
import { REMOVE_TOKEN } from '@/utils/token'
//创建axios实例
let instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可以在这里添加请求头，比如 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const data = response.data

    if (data.code === 401) {
      // 处理 token 失效
      ElMessage.error('Token 已失效，请重新登录')
      REMOVE_TOKEN()
      router.push('/login')
    }
    return response
  },
  (error) => {
    ElMessage.error('请求响应失败，失败原因：' + error)
    return Promise.reject(error)
  },
)

const request = {
  post: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => instance.post<T>(url, data, config),
  get: <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => instance.get<T>(url, config),
}

export default request
