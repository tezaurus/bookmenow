export default {
  state: {
    isLoading: Boolean
  },

  actions: {
    loadingStarted({ commit }: { commit: Function }): void {
      commit('startLoading');
    },

    loadingStopped({ commit }: { commit: Function }): void {
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