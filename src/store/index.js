import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'https://jsonplaceholder.typicode.com'
const state = {
  users: [],
}

const actions = {
  async getUsers({ commit }) {
    const { data } = await axios.get(`${baseUrl}/users`)
    commit('setUsers', data)
  },
}

const mutations = {
  setUsers(state, payload) {
    state.users = payload
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {},
})
