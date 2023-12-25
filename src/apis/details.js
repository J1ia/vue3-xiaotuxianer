import request from '@/utils/http.js'

export const getDeatil = (id) => {
  return request({
    url:'/goods',
    params: {
      id
    }
  })
}

export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}