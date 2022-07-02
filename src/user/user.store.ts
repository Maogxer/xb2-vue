import { RootState } from '@/app/app.store';
import { Module } from 'vuex';

export interface UserState {
  currentUser: string;
}

/**
 * 创建 Store
 */
const store: Module<UserState, RootState> = {
  state: {
    currentUser: ''
  },

  mutations: {
    setCurrentUser(state, data) {
      state.currentUser = data;
    }
  },

  actions: {
    getCurrentUser(context) {
      const user = '王皓';

      context.commit('setCurrentUser', user);
    }
  }
};

/**
 * 导出 Store
 */
export default store;
