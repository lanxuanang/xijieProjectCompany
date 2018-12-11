<template>
  <div class="bottomList">
    <div class="" v-for="(item,index) in dataList">
      <div class="bottomListSec" :class='{rotateDeg:item.rotateDeg}' @click="showRotateDeg(index)">
        <span>{{item.name}}</span>
        <router-link to="managerLevel">Home</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "bottomList",
    data: function () {
      return {
        dataList: [
          {name: '帮助中心', rotateDeg: false},
          {name: '服务支持', rotateDeg: false},
          {name: '帮助中心', rotateDeg: false},
          {name: '关于我们', rotateDeg: false},
          {name: '关注我们', rotateDeg: false},
          {name: '特色服务', rotateDeg: false}
        ]
      }
    },
    methods: {
      showRotateDeg: function (index) {
        this.dataList[index].rotateDeg = !this.dataList[index].rotateDeg
      }
    },
    beforeCreate: function () {
      console.log('beforeCreate' + '-bottomList')
    },
    created: function () {
      console.log('created' + '-bottomList')
    },
    beforeMount: function () {
      console.log('beforeMount' + '-bottomList')
    },
    mounted: function () {
      console.log('mounted' + '-bottomList')
    },
    beforeUpdate: function () {
      debugger
      console.log('beforeUpdate' + '-bottomList')
    },
    updated: function () {
      console.log('updated' + '-bottomList')
    }

  }
</script>

<style scoped>
  .bottomList > div {
    padding: 0px 20px;
  }

  .bottomList {
    background-color: #f2f2f2;
    color: #333333;
    font-size: 12px;
  }

  .bottomListSec {
    padding: 10px;
    position: relative;
  }

  .bottomListSec:after {
    content: '';
    width: 100%;
    position: absolute;
    height: 1px;
    background-color: #333333;
    left: 0px;
    -webkit-transfrom: scale(0.5, 0.5);
    transfrom: scale(0.5, 0.5);
    bottom: 0px;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5, 0.1);
    -ms-transform: scale(0.5, 0.1);
    -o-transform: scale(0.5, 0.1);
    transform: scale(1, 0.1);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .bottomListSec:before {
    content: '+';
    position: absolute;
    right: 0px;
    transition: all 286ms;
    -moz-transition: all 286ms; /* Firefox 4 */
    -webkit-transition: all 286ms; /* Safari 和 Chrome */
    -o-transition: all 286ms;
    box-sizing: border-box;
  }

  .rotateDeg:before {
    transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
  }
</style>
