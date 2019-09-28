import Vue from 'vue';
import Vuex from 'vuex';
import menu from "./modules/menu"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollT: 0
  },
  mutations: {
    setMenuTop: (state, mHeight) => {
      state.scrollT = mHeight
    }
  },
  actions: {
    setMenuScrollTop: (context, mHeight) => {
      context.commit("setMenuTop", mHeight);
    }
  },
  modules:{
    menu
  },
  getters: {
    menuData:state=>{
      return state.menu.menuList
    }
  },
})
