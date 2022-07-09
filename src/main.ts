import { titleMixin } from './app/app.mixin';
import { createApp } from 'vue';
import App from './app/app.vue';
import appStore from './app/app.store';
import appRouter from './app/app.router';

/**
 * 创建应用
 */
const app = createApp(App);

/**
 * 应用用 Store
 */
app.use(appStore);

/**
 * 应用路由
 */
app.use(appRouter);

/**
 * 标题混合
 */
app.mixin(titleMixin);

/**
 * 挂载应用
 */
app.mount('#app');
