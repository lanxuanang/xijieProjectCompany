<template>
  <div class="designClass">
    <div>
      <div class="designClassTitle designClassTitleOne">
        <span>USA Design</span>
      </div>
      <div class="designClassTitle">
        <span>浓浓加州<br>遇见西部牛仔</span>
      </div>
      <div class="designClassTitle designClassTitleThird">
        <span>进一步了解</span>
      </div>
    </div>
    <div v-for="item in usaDesign">
      <img :src="'../../static/img/productDetail/usa/'+item.url+'.png'">
      <div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "productDetail",
    data: function () {
      return {
        usaDesign: [
          {url: 'keting', id: 1},
          {url: 'chufang', id: 2},
          {url: 'woshi', id: 3},
          {url: 'yangtai', id: 4}
        ]
      }
    },
    beforeCreate: function () {
      console.log('beforeCreate' + '-productDetail')
    },
    created: function () {
      console.log('created' + '-productDetail')
    },
    beforeMount: function () {
      console.log('beforeMount' + '-productDetail')
    },
    mounted: function () {
      //alert(this.$route.query.name)
      // this.productTitle = this.$route.query.name
    },
    beforeRouteEnter: function (to, from, next) {
      alert(to)
      next()
    }
  }
</script>

<style scoped>
  .designClass{
    padding-top: 140px;
  }
  .designClass img{
    width: 100%;
  }
  .designClassTitle{
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    padding: 30px 0px;
  }
  .designClassTitleOne{
    padding-bottom: 0px;
  }
  .designClassTitleThird{
    padding-top: 0px;
    color: #0070c9;
  }
</style>
