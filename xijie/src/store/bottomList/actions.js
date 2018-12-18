import { getBottomList } from './api.js'
export default {
  getBottomList:function(context){
   return getBottomList().then(function(data){
      context.commit(
        'xijieBottomList',data.data.data
      )
    })
  }
}

