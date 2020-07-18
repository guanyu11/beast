import Vue from 'vue'
import Vuex from 'vuex'
import homepage from './homepage';
import classifypage from './classifypage';
import storespage from './storespage';
import findpage from './findpage';
import minepage from './mine';
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    beast_id:localStorage.getItem("beast_id")||''
  },
  mutations: {
    handleLogin(state,data){
      state.beast_id = data.member.id;
      localStorage.setItem("beast_id",data.member.id);
    }
  },
  actions: {
  },
  modules: {
    homepage,
    classifypage,
    storespage,
    findpage,
    minepage
  }
})
