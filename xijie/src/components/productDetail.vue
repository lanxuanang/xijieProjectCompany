<template>
  <div class="productDetail">
    <h1>44444</h1>
    <div>
        <span>

        </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "productDetail",
    data: function () {
      return {
        productTitle: '',
        productDetail: ''
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
      alert(this.$route.query.name)
      // this.productTitle = this.$route.query.name
    },
    beforeRouteEnter: function (to, from, next) {
      console.log(to)
      console.log(from)
      console.log(next)
    }

  }
</script>

<style scoped>

</style>
