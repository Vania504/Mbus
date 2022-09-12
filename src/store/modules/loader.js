export default {
    state: {
      loader: true,
    },
    mutations: {
      setLoader(state, loader) {
        state.loader = loader
      },
    },
    actions: {
      async updateLoader({ commit }, toUpdate) {
        try {
          commit('setLoader', toUpdate)
        } catch (e) {
          commit('setError', e)
          throw e
        }
      },
    },
    getters: {
      loader: s => s.loader,
    }
  }
  