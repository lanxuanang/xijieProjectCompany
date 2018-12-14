<template>
  <div class="productBar">
    <div v-for='item in styleListIcons'>
      <img :src='item.url'>
      <div class="discript">
        <span>{{item.discript}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import china from '../assets/china.png'
  import japan from '../assets/japan.png'
  import usa from '../assets/usa.png'
  import europe from '../assets/europe.png'

  console.log(china)
  export default {
    name: "productBar",
    data: function () {
      return {
        styleListIcons: [
          {
            url: china,
            id: '1',
            discript:'新古典'
          }, {
            url: japan,
            id: '2',
            discript:'日式'
          }, {
            url: usa,
            id: '3',
            discript:'美式乡村'
          }, {
            url: europe,
            id: '4',
            discript:'地中海'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .productBar{
    display:flex;
    justify-content:center;
  }
  .productBar > div {
    padding: 10px;
    width: 50px;
    text-align:center;
  }
  .productBar img{
    width:100%;
  }
  .discript{
    text-align:center;
    font-size:12px;
  }
</style>
