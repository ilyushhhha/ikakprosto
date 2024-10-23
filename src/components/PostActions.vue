<template>
  <div class="flex flex-row pt-4 mt-4">
    <button class="text-blue-600 hover:underline px-1 py-1 m-1">Like {{props.reactions.likes }}</button>
    <button class="text-blue-600 hover:underline px-1 py-1 m-1">Trash {{props.reactions.dislikes}}</button>
    <router-link :to="{ name: 'PostDetailView', params: {post: props.id } }"
      class="text-blue-600 hover:underline px-1 py-1 m-1">Comments</router-link>
    <!-- <span>{{ post.date }}</span> -->
    <span v-for="tag in props.tags" :key="tag"
      class="bg-blue-100 text-blue-600 border border-blue-300 rounded-lg px-1 py-1 m-1">
      {{ tag }}<span v-if="!$last"></span>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['reactions', 'tags', 'id'])
// const {id} = props.id
// const { reactions, tags, id } = defineProps(['reactions', 'tags', 'id']); 
</script>

<style scoped>
/* Добавьте стили для компонента при необходимости */
</style>