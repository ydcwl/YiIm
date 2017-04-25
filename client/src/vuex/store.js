import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state = {
  userInfo: {
    id: '',
    name: '',
    img: ''
  }
}

const mutations = {
  setname(state, data) {
    state.userInfo.name = data;
  },
  setid(state, data) {
    state.userInfo.id = data;
  },
  setimg(state, data) {
    state.userInfo.img = data;
  }
}

const actions = {
  setname({ commit }, data) {
    commit('setname', data);
  },
  setid({ commit }, data) {
    commit('setid', data)
  }
  ,
  setimg({ commit }, data) {
    commit('setimg', data)
  }
}

const getters = {
  getName: state => {
    return state.userInfo.name;
  },
  getId: state => {
    return state.userInfo.id;
  },
  getImg: state => {
    return state.userInfo.img;
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});