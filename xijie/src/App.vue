<template>
  <div id="app">
    <router-view name="xijieHeader"/>
    <router-view name="homeIntroduce"/>
    <router-view name="managerLevel"/>
    <router-view name="bottomList"/>
    <router-view name="productTab"/>
    <router-view name="productDetailA"/>
    <router-view name="productBar"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App'
  }
</script>

<style>
  body {
    margin: 0px;
    padding: 0px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
