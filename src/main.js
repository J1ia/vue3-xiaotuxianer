import '@/styles/common.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入懒加载指令
import { lazyPlugin } from './directives'
import {componentPlugin} from '@/components'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
// 注册插件
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


