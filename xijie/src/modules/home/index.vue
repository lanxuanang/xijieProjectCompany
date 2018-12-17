<template>
  <div>
    <xijieHeader data-bind:designStyles="designStyles"></xijieHeader>
  </div>
</template>

<script>
  import xijieHeader from './_components/header'
  import store from './_store'

  export default {
    store,
    name: 'xijieHeader',
    data: function () {
      return {
        // designStyles: this.designStyles
        // designStyles: []
      }
    },
    computed: {
      designStyles: function () {
        // console.log(this.$store.getters.designStyles)
        console.log(122222)
        return this.$store.getters.designStylesSec
      }
    },
    created: function () {
      const STORE_KEY = '$_chat';
      // eslint-disable-next-line no-underscore-dangle
      // if (!(STORE_KEY in this.$store._modules.root._children)) {
      // console.log(this.$store)
      // this.$store.registerModule(STORE_KEY, store);
      // }
    },
    components: {
      xijieHeader
    }
  }
</script>

<style scoped>

</style>
