<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<h1>我的 MintUI 测试</h1>-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      showToast: function () {
        this.$toast("Hello world");
      }
    }

  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  h1 {
    margin-top: 10px;
  }
</style>
