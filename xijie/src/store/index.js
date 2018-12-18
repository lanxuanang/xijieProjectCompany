import header from './header'
import bottom from './header'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    header:header
    // bottom:bottom
  }
})
