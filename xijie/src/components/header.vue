<template>
  <div class="xijieHeader">
    <div class="headerFirstLi">
      <span class="headerFirstLiTop" @click='showCompany'></span>
      <span class="headerFirstLiBottom"></span>
    </div>
    <div>

    </div>
    <div>

    </div>
    <div class="companyList" :class='{showCompanyList:showCompanyList}'>
      <div>
        <div class="companyTabLine" v-for="item in designStyles" @click="showDesignDetail(item.id)">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'xijieHeader',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        showCompanyList: false,
        designStyles:[
          {name:'美式乡村',id:'1'},
          {name:'古典欧式',id:'2'},
          {name:'地中海式',id:'3'},
          {name:'东南亚',id:'4'},
          {name:'日式',id:'5'},
          {name:'新古典',id:'6'},
          {name:'现代简约',id:'7'},
        ]
      }
    },
    methods: {
      showCompany: function () {
        this.showCompanyList = !this.showCompanyList
      },
      showDesignDetail:function(designId){
        this.showCompanyList=false
        this.$router.push({path:'product',query:{id:designId}})
      }

    },
    beforeCreate: function () {
      console.log('beforeCreate' + '-header')
    },
    created: function () {
      console.log('created' + '-header')
    },
    beforeMount: function () {
      console.log('beforeMount' + '-header')
    },
    mounted: function () {
      console.log('mounted' + '-header')
    },
    beforeUpdate: function () {
      console.log('beforeUpdate' + '-header')
    },
    updated: function () {
      console.log('updated' + '-header')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .xijieHeader {
    width: 100%;
    height: 48px;
    background-color: black;
  }

  .headerFirstLi {
    width: 48px;
    height: 48px;
  }

  .headerFirstLi span {
    display: block;
    width: 17px;
    height: 1px;
    background: #fff;
    position: absolute;
    left: 7px;
    z-index: 1;
    margin-left: 10px;
  }

  .headerFirstLiTop {
    top: 18px
  }

  .headerFirstLiBottom {
    top: 25px
  }

  .companyList {
    position: absolute;
    top: 48px;
    background-color: black;
    width: 100%;
    color: white;
    visibility: hidden;
    height: 0px;
    transition: all 286ms;
    -moz-transition: all 286ms; /* Firefox 4 */
    -webkit-transition: all 286ms; /* Safari 和 Chrome */
    -o-transition: all 286ms;
  }

  .showCompanyList {
    visibility: visible;
    height: 100%;
    position: fixed;
    z-index: 9999;
  }

  .companyList > div {
    padding: 0px 30px;
  }

  .companyTabLine {
    position: relative;
    padding: 10px 0px;
    text-align: left;
    font-size: 14px;

  }

  .companyTabLine:after {
    content: '';
    width: 100%;
    position: absolute;
    height: 1px;
    background-color: white;
    left: 0px;
    -webkit-transfrom: scale(0.5, 0.5);
    transfrom: scale(0.5, 0.5);
    bottom: 0px;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5, 0.3);
    -ms-transform: scale(0.5, 0.3);
    -o-transform: scale(0.5, 0.3);
    transform: scale(1, 0.3);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }


</style>
