import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  showCompanyList: true,
  designStyles: ''
}
// export default new Vuex.Store({
//   state:state,
//   getters:getters,
//   mutations:mutations,
//   actions:actions
// })
export default {
  state:state,
  getters:getters,
  mutations:mutations,
  actions:actions
}
