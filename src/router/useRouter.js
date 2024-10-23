import { createRouter, createWebHistory } from 'vue-router';
import PostListView from '../views/PostListView.vue';
import PostDetailView from '../views/PostDetailView.vue';

const routes = [
  { path: '/', name: 'PostListView', component: PostListView }, // Главная страница со списком постов
  { path: '/:post', name: 'PostDetailView', component: PostDetailView }, // Динамическая страница поста
];

const useRouter = createRouter({
  history: createWebHistory(),
  routes,
});

export default useRouter;
