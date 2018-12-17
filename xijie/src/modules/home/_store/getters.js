export default {
  designStylesSec:function(state){
    return state.designStyles.map(function(item,index,arr){return {name:item.name+index,id:item.id}})
  }
}
