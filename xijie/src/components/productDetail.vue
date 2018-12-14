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
      <img :src="item.url">
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
          {url: 'https://pic1.to8to.com/smallcase/1404/04/20140404_77b95964b5365f2dffderlew0779yn6v_284.jpg', id: 1},
          {url: 'https://pic1.to8to.com/smallcase/1407/13/20140713_fe91dcf4c16e566cbdf92wcohi1felya_284.jpg', id: 2},
          {url: 'https://pic.to8to.com/smallcase/1404/04/20140404_0567331e847c4524a1ac9sdc40kpdzmz_284.jpg', id: 3},
          {url: 'https://pic.to8to.com/smallcase/1312/27/20131227_0b1787ae68303af64e0eqrl1f7fs3y03_284.jpg', id: 4}
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
