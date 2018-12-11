<template>
  <div class="managerLevel">
    <div><span>管理层简介</span></div>
    <div v-for="(item,index) in managerLevelList">
      <img :src='item.photo'>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "managerLevel",
    data: function () {
      return {
        managerLevelList: [
          {
            photo: '../../assets/logo.png',
            name: '距离远',
            job: '总经理'
          }
        ]
      }
    },
    beforeCreate: function () {
      console.log('beforeCreate' + '-managerLevel')
    },
    created: function () {
      console.log('created' + '-managerLevel')
    },
    beforeMount: function () {
      console.log('beforeMount' + '-managerLevel')
    },
    mounted: function () {
      debugger
      console.log('mounted' + '-managerLevel')
    },
    beforeUpdate: function () {
      console.log('beforeUpdate' + '-managerLevel')
    },
    updated: function () {
      console.log('updated' + '-managerLevel')
    }

  }
</script>

<style scoped>

</style>
