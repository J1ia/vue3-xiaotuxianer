// createRouter --- 创建router实例对象
// createWebHistory --- 创建hostory模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/Layout/index.vue'
import login from '@/views/Login/index.vue'
import home from '@/views/Home/index.vue'
import category from '@/views/Category/index.vue'
import subcategory from '@/views/SubCategory/index.vue'
import detail from '@/views/Deatils/indev.vue'
import cartlist from '@/views/CartList/index.vue'
import checkout from '@/views/Checkout/index.vue'
import pay from '@/views/Pay/index.vue'
import payback from '@/views/Payback/index.vue'
import member from '@/views/Member/index.vue'
import userInfo from '@/views/Member/component/UserInfo.vue'
import userOrder from '@/views/Member/component/UserOrder.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
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
        },
        {
          path:'details/:id',
          component:detail
        },
        {
          path:'cartlist',
          component:cartlist
        },
        {
          path:'checkout',
          component: checkout
        },
        {
          path: 'pay',
          component: pay
        },
        {
          path:'payback',
          component: payback
        },
        {
          path:'member',
          component: member, 
          children: [
            {
              path: '',
              component: userInfo
            },
            {
              path: 'order',
              component: userOrder
            }
          ]
        }
        
      ]
    },
    {
      path: '/login', 
      component: login,
    }
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top:0
    }
  }
})

export default router
