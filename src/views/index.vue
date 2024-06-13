<template>
  <div>
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <h1 class="text-3xl font-bold text-blue-500">{{ data }}{{ baseStore.HelloWord }}</h1>
  </div>
</template>

<script setup>
import { useBaseStore } from '@/store/baseStore'
const data = ref('Hello World！')
const baseStore = useBaseStore()
</script>

<style scoped></style>
