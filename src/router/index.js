// createRouter --- 创建router实例对象
// createWebHistory --- 创建hostory模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/Layout/index.vue'
import login from '@/views/Login/index.vue'
import home from '@/views/Home/index.vue'
import category from '@/views/Category/index.vue'
import subcategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      component: layout,
      children: [
        {
          // 默认二级路由页面： 置空
          path: '',
          component: home
        },
        {
          path:'category/:id',
          component: category
        },
        {
          path:'category/sub/:id',
          component: subcategory
        }
      ]
    },
    {
      path: '/login', 
      component: login,
    }
  ]
})

export default router
