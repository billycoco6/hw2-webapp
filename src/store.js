import Vue from 'vue'
import Vuex from 'vuex'
import router from './router/index.js'

Vue.use(Vuex)

const state = {
  auth: false
}

const mutations = {
  login (state) {
    console.log('mutations login')
    state.auth = true
    router.push({ name: 'Post.index' })
  },
  logout (state) {
    console.log('mutations logout')
    state.auth = false
    router.push({ name: 'SignIn' })
  }
}

const actions = {
  login: ({ commit }) => commit('login'),
  logout: ({ commit }) => commit('logout')
}

const getters = {
  loggedIn: state => state.auth
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
