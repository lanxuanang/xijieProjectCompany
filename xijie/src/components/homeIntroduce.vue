<template>
  <div class="homeIntroduce">
    <div class="" v-for="item in homeIntroduceList">
      <img :src="'../../static/img/home/'+item.url+'.png'">
      <div class="home" :class="item.mineClass">
        <div>{{item.title1}}</div>
        <div @click="goProduct()">{{item.title2}}</div>
      </div>
    </div>
    <!--<div class="">-->
    <!--<img src="../../static/img/home/homeZs.png">-->
    <!--<div class="home home2">-->
    <!--<span>中国风<br>进一步了解</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="">-->
    <!--<img src="../../static/img/home/homeDzh2.png">-->
    <!--<div class="home home2">-->
    <!--<span>美丽地中海<br>进一步了解</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="">-->
    <!--<img src="../../static/img/home/homeMsxc.png">-->
    <!--<div class="home home3">-->
    <!--<span>美式乡村<br>进一步了解</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="">-->
    <!--<img src="../../static/img/home/homeRs.png">-->
    <!--<div class="home home4">-->
    <!--<span>东瀛日本<br>进一步了解</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="">-->
    <!--<img src="../../static/img/home/homeBo.png">-->
    <!--<div class="home home4">-->
    <!--<span>北欧风情<br>进一步了解</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="">-->
    <!--<img src="../../static/img/home/homeXd.png">-->
    <!--<div class="home home4">-->
    <!--<span>现代简约<br>进一步了解</span>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "homeIntroduce",
    data: function () {
      return {
        homeIntroduceList: [
          {url: 'home1', mineClass: 'home1',title1:'家',title2:'温暖的港湾', id: 1},
          {url: 'homeZs', mineClass: 'home2', title1:'中国风',title2:'进一步了解', id: 2},
          {url: 'homeDzh2', mineClass: 'home3', title1:'美丽地中海',title2:'进一步了解', id: 3},
          {url: 'homeMsxc', mineClass: 'home4', title1:'美式乡村',title2:'进一步了解', id: 4},
          {url: 'homeRs', mineClass: 'home4', title1:'东瀛日本',title2:'进一步了解', id: 5},
          {url: 'homeBo', mineClass: 'home4', title1:'北欧风情',title2:'进一步了解', id: 6},
          {url: 'homeXd', mineClass: 'home4', title1:'现代简约',title2:'进一步了解', id: 7},
        ]
      }
    },
    methods: {
      goProduct: function (id) {
         alert(123)
      }
    }
  }
</script>

<style scoped>
  .homeIntroduce{
    padding-top: 50px;
  }
  .homeIntroduce img {
    width: 100%;
  }

  .homeIntroduce > div {
    position: relative;
  }

  .home {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    -ms-transform: translateX(-50%); /* IE 9 */
    -webkit-transform: translateX(-50%); /* Safari and Chrome */
    -o-transform: translateX(-50%); /* Opera */
    -moz-transform: translateX(-50%); /* Firefox */

    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }

  .home1 {
    color: #fda232;
  }

  .home2 {
    color: #fff;
  }

  .home3 {
    color: #fff;
  }

  .home4 {
    color: #848484;
  }
</style>
