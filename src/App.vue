<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>我的 MintUI 测试</h1>
    <mt-button type="primary" @click.native="showToast">primary</mt-button>
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
