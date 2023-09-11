import request from '@/utils/http.js'

export const getCategoryAPI = (id) => request({url:'/category', params:{id}})

export const getCategoryFilterAPI = (id) => request({
  url:'/category/sub/filter',
  params:{
    id
  }
})