<template>
  <div>
    <!-- Здесь отображаем содержимое поста через компонент PostContent -->
    <PostContent :title="post.title" :body="post.body" />
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';
import PostContent from '../components/PostContent.vue';

// Инжектируем данные постов из провайдера
const postsData = inject('postsData');
// Получаем текущий маршрут и параметр postId
const route = useRoute();
const postId = route.params.post;

// Проверяем, что postsData и posts существуют
const post = computed(() => postsData?.posts?.find(p => p.id === postId) || null);

if (!post.value) {
  console.error(`Post with id ${postId} not found or postsData is not available yet.`);
}
</script>

<style scoped>
/* Добавьте стили при необходимости */
</style>
