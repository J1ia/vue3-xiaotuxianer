<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue"
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <router-view/>
  <LayoutFooter></LayoutFooter>
  
</template>

<style>

</style>