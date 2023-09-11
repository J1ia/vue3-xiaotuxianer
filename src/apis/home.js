import httpInstance from '@/utils/http.js'

// 获取banner
export const getBannerAPI = ((params = {}) => {
  // 默认为1 商品为2
  const {distributionSite = '1'}  = params
  return httpInstance({
    url:'home/banner',
    params: {
      distributionSite
    }
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

