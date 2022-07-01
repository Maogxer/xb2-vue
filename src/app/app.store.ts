import { createStore } from 'vuex';

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    name: '宁皓网'
  },

  getters: {
    name(state) {
      return `🍎 ${state.name}`;
    }
  }
});

/**
 * 导出 Store
 */
export default store;
