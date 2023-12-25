import { defineStore } from "pinia"
import {ref} from 'vue'
import {loginAPI} from '@/apis/user.js'
import {useCartStore} from './cartStore'
import { mergeCartAPI } from "../apis/cart"

export const useUserStore = defineStore('user', () => {
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  const cartStore = useCartStore()

  // 2. 定义获取接口数据的action函数
  const getUserInfo = async ({account, password}) => {
    const res = await loginAPI({account, password})
    userInfo.value = res.result

    // 合并购物车的操作
    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))

    cartStore.updateNweList()
  }

  // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    // 清除购物车信息
    cartStore.clearCart()

  }

  // 3. 以对象的形式把userInfo和getUserInfo  return出去
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist:true
})
