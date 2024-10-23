<template>
  <div>
    <div v-for="post in postsData.posts" :key="post.id" class="mb-4 justify-center text-justify">
      <pre>{{ post }}</pre>
      <div class="p-4 bg-white mb-6">
        <PostContent :title="post.title" :body="post.body" />
        <PostActions :reactions="post.reactions" :tags="post.tags" :id="post.id"  />

        <p v-if="loadingState">Loading...</p>
        <p v-if="errorState">{{ errorState }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import PostContent from '../components/PostContent.vue';
import PostActions from '../components/PostActions.vue';

const postsData = inject('postsData'); // Получаем данные постов из провайдера
const loadingState = inject('loadingState'); // Получаем состояние загрузки
const errorState = inject('errorState'); // Получаем состояние ошибки
console.log('postsData::::',postsData)

</script>

<style scoped>
/* Добавьте стили для компонента при необходимости */
</style>
