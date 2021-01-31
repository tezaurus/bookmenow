export default {
  state: {
    isLoading: Boolean
  },

  actions: {
    loadingStarted({ commit }) {
      commit('startLoading');
    },

    loadingStopped({ commit }) {
      commit('stopLoading');
    },
  },

  mutations: {
    startLoading(state: any) {
      state.isLoading = true;
    },

    stopLoading(state: any) {
      state.isLoading = false;
    },
  },

  getters: {
    isLoading(state: any) {
      return state.isLoading;
    },
  }
}