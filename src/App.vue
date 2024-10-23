<template>
  <div>
    <router-view /> <!-- Отображаем текущий маршрут -->
  </div>
</template>

<script setup>
import { provide,onMounted} from 'vue';
import { useService } from './hooks/useService'; // Импортируем useService

const { data, error, loading, fetchResources } = useService(); // Используем хук

// Провайдер для доступа к данным во вложенных компонентах
provide('postsData', data);
provide('loadingState', loading);
provide('errorState', error);
// Запрос данных при монтировании
onMounted(async () => {
  await fetchResources('posts');
});
console.log('data::::',data)

</script>

<style scoped>
/* Добавьте стили для компонента при необходимости */
</style>
