<template>
  <div>
    <div>
      <h1>44444</h1>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "productDetail",
    data: function () {
      return {}
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
      alert(this.$route.query.name)
      // this.productTitle = this.$route.query.name
    },
    beforeRouteEnter: function (to, from, next) {
     next()
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
</style>
