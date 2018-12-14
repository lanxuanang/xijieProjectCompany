<template>
  <div>
    <div class="productBar">
      <div v-for='item in styleListIcons'>
        <img :src='"../../static/img/designClass/"+item.url+".png"'>
        <div class="discript">
          <span>{{item.discript}}</span>
        </div>
      </div>
    </div>
    <router-view name="productDetail"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "productBar",
    data: function () {
      return {
        styleListIcons: [
          {
            url: 'keting',
            id: '1',
            discript: '客厅'
          }, {
            url: 'chufang',
            id: '2',
            discript: '厨房'
          }, {
            url: 'woshi',
            id: '3',
            discript: '卧室'
          }, {
            url: 'yangtai4',
            id: '4',
            discript: '阳台'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .productBar {
    display: flex;
    justify-content: center;
    background: rgba(242, 242, 242, 0.7);
    position: fixed;
    top:48px;
    width: 100%;
  }

  .productBar > div {
    padding: 10px;
    width: 50px;
    text-align: center;
    padding: 10px 20px;
  }

  .productBar img {
    width: 100%;
  }

  .discript {
    text-align: center;
    font-size: 12px;
  }
</style>
