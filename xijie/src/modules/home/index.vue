<template>
  <div>
    <xijie-header :designStyles="designStyles"></xijie-header>
  </div>
</template>

<script>
  import xijieHeader from './_components/header'
  import store from './_store'

  export default {
    name: 'xijieHeader',
    data: function () {
      return {
        designStyles: this.$store.state.designStyles
      }
    },
    components: {
      xijieHeader
    },
    created() {
      const STORE_KEY = '$_chat';
      // eslint-disable-next-line no-underscore-dangle
      if (!(STORE_KEY in this.$store._modules.root._children)) {
        this.$store.registerModule(STORE_KEY, store);
      }
    }
  }
</script>

<style scoped>

</style>
