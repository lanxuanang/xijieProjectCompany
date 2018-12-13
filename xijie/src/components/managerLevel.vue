<template>
  <div class="managerLevel">
    <div><span>管理层简介</span></div>
    <div v-for="(item,index) in managerLevelList">
      <span>{{item.job}}:{{item.name}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "managerLevel",
    data: function () {
      return {
        managerLevelList: []
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
      this.$http.get('http://localhost:4000/getManagerLevel').then((data) => {
        console.log(111111111)
        console.log(data)
        this.managerLevelList = data.data.data
      })
    },
    beforeUpdate: function () {
      console.log('beforeUpdate' + '-managerLevel')
    },
    updated: function () {
      console.log('updated' + '-managerLevel')
    },
    methods:{

    }

  }
</script>

<style scoped>

</style>
