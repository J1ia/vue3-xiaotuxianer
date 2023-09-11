// 封装banner相关代码
import {ref, onMounted} from 'vue'
import {getBannerAPI} from '@/apis/home.js'
// 轮播图
export function useBanner() {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI()
    bannerList.value = res.result
  }
  onMounted(() => {
    getBanner()
  })

  return {bannerList}
}