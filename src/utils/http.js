// axios基础封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user.js'
import {useRouter} from 'vue-router'



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
  // token拦截
  // 1.从pinia获取token数据
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  const router = useRouter()
  // 统一错误提示
  ElMessage({
    type:'warning',
    message: e.response.data.message
  })

  // 401 token失效处理
  // 1.清除本地用户数据
  // 2. 跳转到登录页
  if (e.response.status === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})
export default httpInstance