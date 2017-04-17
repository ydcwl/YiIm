import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state = {
  userInfo: {
    id: '',
    name: ''
  }
}

const mutations = {
  setname(state, data) {
    state.name = data;
  },
  setid(state, data) {
    state.id = data;
  }
}

const actions = {
  setname({ commit }, data) {
    commit('setname', data);
  },
  setid({ commit }, data) {
    commit('setid', data)
  }
}

const getters = {
  getName: state => {
    return state.userInfo.name;
  },
  getId: state => {
    return state.userInfo.id;
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});