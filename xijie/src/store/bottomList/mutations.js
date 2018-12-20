export default {
  xijieBottomList:function(state,bottomdataList){
    state.bottomdataList=bottomdataList
  },
  showList:function(state,index){
    state.bottomdataList[index].rotateDeg = !state.bottomdataList[index].rotateDeg
    state.bottomdataList[index].listDetailThird = !state.bottomdataList[index].listDetailThird
  }
}


