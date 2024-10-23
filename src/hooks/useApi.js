import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
  withCredentials: true, // Позволяет отправлять куки
});

const get = async (url, params = {}) => {
  const response = await apiClient.get(url, { params });
  return response;
};

export const useApi = () => {
  return { get };
};

// Перехватчик запроса для логирования
apiClient.interceptors.request.use(
  request => {
    console.log('Request:', {
      url: request.url,
      method: request.method,
      headers: request.headers,
      data: request.data,
    });
    return request;
  },
  error => {
    console.error('apiClient request error:', error);
    return Promise.reject(error);
  }
);

// Перехватчик ответа для логирования и обработки CORS ошибок
apiClient.interceptors.response.use(
  response => {
    console.log('Response:', {
      status: response.status,
      data: response.data,
      headers: response.headers,
    });
    return response.data; // Возвращаем только данные
  },
  error => {
    if (error.response) {
      // Сервер вернул статус, который выходит за пределы 2xx
      console.error('API error response:', error.response);
    } else if (error.request) {
      // Запрос был сделан, но ответа не получено
      console.error('CORS error: Please check your server settings or the request configuration.');
    } else {
      // Произошла ошибка при настройке запроса
      console.error('apiClient response error:', error.message);
    }
    return Promise.reject(error);
  }
);

