import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header'
import managerLevel from '../components/managerLevel'
import bottomList from '../components/bottomList'
import product from '../components/product'
import productDetail from '../components/productDetail'
import productBar from '../components/productBar'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      components: {
        'xijieHeader': header,
        'bottomList': bottomList
      }
    },
    {
      path: '/managerLevel',
      name: 'managerLevel',
      components: {
        'xijieHeader': header,
        'managerLevel': managerLevel
      }
    },
    {
      path: '/product',
      name: 'product',
      components: {
        'xijieHeader': header,
        // 'productTab': product,
        'productBar':productBar
      },
      children: [{
        path: 'productDetail',
        name: 'productDetail',
        components: {
          'productDetail':productDetail
        }
      }]
    }
  ]
})

