import { ref } from 'vue';
import { useService } from './useService'; // Импортируем useService

export const useServicePosts = () => {
  const { data, error, loading, fetchResources } = useService();
  const posts = ref([]); // Создаем локальную переменную для хранения постов

  const fetchPosts = async () => {
    await fetchResources('posts'); // Запрашиваем посты
    if (data.value) {
      console.log('Data in useServicePosts:', data.value); // Логируем данные
      posts.value = data.value.posts || []; // Извлекаем массив постов
    }
  };

  return { posts, error, loading, fetchPosts };
};
