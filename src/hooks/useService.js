import { ref } from 'vue';
import { useApi } from './useApi'; // Импортируем useApi

export const useService = () => {
  const { get } = useApi();
  const data = ref([]);
  const error = ref(null);
  const loading = ref(false);

  // Универсальная функция для GET-запросов
  const fetchResources = async (resource, params = {limit:5}) => {
    loading.value = true;
    error.value = null;
    try {
      data.value = await get(`/${resource}`, params);
    } catch (err) {
      error.value = `Ошибка при загрузке данных: ${err.message}`;
    } finally {
      loading.value = false;
    }
  }

  return { data, error, loading, fetchResources};
};
