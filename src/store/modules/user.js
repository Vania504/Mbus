export default {
  state: {
    user: {},
    loggedUser: null,
    phoneNumbers: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setLoggedUser(state, loggedUser) {
      state.loggedUser = loggedUser
    },
    setPhoneNumbers(state, phoneNumbers){
      state.phoneNumbers = phoneNumbers
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
    async updatePhoneNumbers({ commit, getters }, toUpdate) {
      try {
        const updateData = { ...getters.phoneNumbers, ...toUpdate }
        commit('setPhoneNumbers', updateData)
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
    phoneNumbers: s => s.phoneNumbers,
  }
}
