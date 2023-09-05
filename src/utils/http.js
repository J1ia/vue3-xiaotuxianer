// axios基础封装
import axios from 'axios'

// 如果项目里面不同的业务模块需要的接口基地址不同，该如何做？
// axios.create()方法可以执行多次，每次执行就会生成一个新的实例

// 创建axios实例
const httpInstance = axios.create({
  // 基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 超时时间
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})
export default httpInstance