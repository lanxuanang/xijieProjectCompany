<template>
  <div class="productTab">
    <div @click="macTab()">
      公司简介
    </div>
    <div @click="iphoneTab()">
      公司业绩
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "productTab",
    data: function () {
      return {
        productTabName: ['mac', 'iphone']
      }
    },
    methods: {
      macTab: function () {
        this.$router.push('productDetail')
      },
      iphoneTab: function () {
        this.$router.push({path: 'productDetail', query: {name: 'money'}})
      }
    },
    watch: {
    }
  }
</script>

<style scoped>
  a{
    font-size: 20px;
  }
  .productTab {
    font-size: 0px;
  }

  .productTab > div {
    width: 50%;
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
    font-size: 16px;
    transition: all 286ms;
    -moz-transition: all 286ms; /* Firefox 4 */
    -webkit-transition: all 286ms; /* Safari 和 Chrome */
    -o-transition: all 286ms;
    border-bottom: solid 1px transparent;
  }

  .productTab > div:hover {
    border-bottom: solid 1px #ebebeb;
  }
</style>
