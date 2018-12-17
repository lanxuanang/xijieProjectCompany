import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  showCompanyList: false,
  designStyles: [
    {name: '美式乡村', id: '1'},
    {name: '古典欧式', id: '2'},
    {name: '地中海式', id: '3'},
    {name: '东南亚', id: '4'},
    {name: '日式', id: '5'},
    {name: '新古典', id: '6'},
    {name: '现代简约', id: '7'},
  ]
}
export default new Vuex.Store({
  state:state,
  getters:getters,
  mutations:mutations,
  actions:actions
})
