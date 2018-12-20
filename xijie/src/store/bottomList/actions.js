import { getBottomListSec } from './api.js'
export default {
  getBottomList:function(context){
   return getBottomListSec().then(function(data){
      context.commit(
        'xijieBottomList',data.data.data
      )
    })
  }
}

