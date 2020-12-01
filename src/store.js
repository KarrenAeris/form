import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    json: {},
    base: {},
  },
  mutations: {
    setJSON(state, json) {
      state.json = json
    },
    setBase(state, base) {
      state.base = base
    }
  },
  getters: {
    getJSON(state) {
      return state.json;
    },
    getBase(state) {
      return state.base
    }
  }
})