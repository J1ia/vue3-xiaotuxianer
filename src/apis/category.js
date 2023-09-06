import request from '@/utils/http.js'

export const getCategoryAPI = (id) => request({url:'/category', params:{id}})