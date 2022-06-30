import { createApp } from 'vue';
import appStore from './app/app.store';
import App from './app/app.vue';

/**
 * 创建应用
 */
const app = createApp(App);

/**
 * 使用 Store
 */
app.use(appStore);

/**
 * 挂载应用
 */
app.mount('#app');
