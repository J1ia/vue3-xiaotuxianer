<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue"
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action
import {useCategoryStore} from "@/stores/category.js"
import { onMounted } from "vue";

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory() )
</script>

<template>
  <LayoutNav></LayoutNav>
  <layoutFixed></layoutFixed>
  <LayoutHeader></LayoutHeader>
  <!-- 破坏复用方式，强制更新 -->
  <!-- <router-view :key="$route.fullPath"/> -->
  <router-view />
  <LayoutFooter></LayoutFooter>
  
</template>

<style>

</style>