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
    startLoading(state: any): void {
      state.isLoading = true;
    },

    stopLoading(state: any): void {
      state.isLoading = false;
    },
  },

  getters: {
    isLoading(state: any): boolean {
      return state.isLoading;
    },
  }
}