<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue"
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
</script>

<template>
  <LayoutNav></LayoutNav>
  <layoutFixed></layoutFixed>
  <LayoutHeader></LayoutHeader>
  <router-view/>
  <LayoutFooter></LayoutFooter>
  
</template>

<style>

</style>