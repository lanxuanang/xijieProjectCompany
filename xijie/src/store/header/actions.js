import { getHeaderListsec } from './api.js'
export default {
  getHeaderList:function(context){
   return getHeaderListsec().then(function(data){
      context.commit(
        'setDesignStyles',data.data.data
      )
    })
  }
}

