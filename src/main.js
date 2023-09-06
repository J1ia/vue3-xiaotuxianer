import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入懒加载指令
import { lazyPlugin } from './directives'


const app = createApp(App)

app.use(createPinia())
app.use(router)
// 注册插件
app.use(lazyPlugin)

app.mount('#app')


