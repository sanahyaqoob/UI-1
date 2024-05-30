import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Correct import for the router

createApp(App).use(router).mount('#app');