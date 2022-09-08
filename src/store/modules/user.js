export default {
  state: {
    user: {},
    loggedUser: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setLoggedUser(state, loggedUser) {
      state.loggedUser = loggedUser
    },
    clearUser(state) {
      state.user = {}
    },
    clearUserLogged(state) {
      state.loggedUser = null
    },
  },
  actions: {
    async updateInfo({ commit, getters }, toUpdate) {
      try {
        const updateData = { ...getters.user, ...toUpdate }
        console.log(updateData)
        commit('setUser', updateData)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async updateInfoLogged({ commit, getters }, toUpdate) {
      try {
        const updateData = { ...getters.loggedUser, ...toUpdate }
        commit('setLoggedUser', updateData)
      }

      catch (e) {
        commit('setError', e)
        throw e
      }
    },
  },
  getters: {
    user: s => s.user,
    loggedUser: s => s.loggedUser,
  }
}
