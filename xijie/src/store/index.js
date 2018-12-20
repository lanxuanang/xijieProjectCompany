import header from './header'
import bottom from './bottomList'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
console.log(bottom)
export default new Vuex.Store({
  modules:{
    bottom:bottom,
    header:header
  }
})
