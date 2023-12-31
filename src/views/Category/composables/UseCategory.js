// 封装分类数据业务相关代码
import {getCategoryAPI} from '@/apis/category.js'
import {onMounted, ref} from 'vue'
import {useRoute, onBeforeRouteUpdate} from 'vue-router'
export function useCategory() {
  // 面包屑
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id=route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())

  // 目标： 路由参数变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })
  return {categoryData}
}