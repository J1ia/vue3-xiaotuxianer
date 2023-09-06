import httpInstance from '@/utils/http.js'

export const getBannerAPI = (() => {
  return httpInstance({
    url:'home/banner'
  })  
})

export const findNewAPI = (() => {
  return httpInstance({
    url:'/home/new'
  })
})

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
 export const getHotAPI = () => {
  return  httpInstance('home/hot')
}

// 商品
export const getGoodsAPI = () => {
  return httpInstance({url: '/home/goods'})
}

