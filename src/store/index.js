import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: '',
    loading: false
  },
  mutations: {
    setUser (state, user) {
        state.user = user
        sessionStorage.setItem('User', user)
    },
    resetUser (state) {
        state.user = null
        sessionStorage.removeItem('User')
    },
    setLoading (state, boolean) {
        state.loading = boolean;
    }
  },
  actions: {},
  getters: {
      getLoading: (state) => state.loading,
      getUser: (state) => state.user,

  }
})

export default store