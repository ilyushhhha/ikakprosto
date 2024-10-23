import { createApp } from 'vue'
import App from './App.vue'
import useRouter from './router/useRouter';
import './assets/style.css';

createApp(App)
.use(useRouter)
.mount('#app')
