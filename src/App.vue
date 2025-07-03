<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/store/counter'
import http from '@/utils/http'

const counter = useCounterStore()
const data = ref<any>(null)

const fetchData = async () => {
  try {
    const response = await http.get('/api/data')
    data.value = response.data
  } catch (error) {
    console.error('Fetch error:', error)
  }
}
</script>

<template>
  <div>
    <h1>Vue3 + TS + Pinia + Axios</h1>
    <p>Count: {{ counter.count }}</p>
    <!-- 移除 increment 调用的括号 -->
    <button @click="counter.increment">Increment</button>

    <button @click="fetchData">Fetch Data</button>
    <div v-if="data">{{ data }}</div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color"; // 导入颜色模块

h1 {
  color: #1a1a1a;
}

button {
  margin: 0 5px;
  padding: 8px 16px;
  background: color.adjust($primary-color, $lightness: 10%); // 使用推荐的替代方案
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>