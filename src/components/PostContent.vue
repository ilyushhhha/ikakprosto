<template>
  <div>
    <h2 class="text-2xl font-bold mb-2">{{ props.title }}</h2>
    <div class="text-gray-700 mb-4">
      <p class="text-base">{{ props.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['title', 'body'])

</script>

<style scoped>
/* Добавьте стили для компонента при необходимости */
</style>