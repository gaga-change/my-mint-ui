<template>
  <div class="hello">
    <ul>
      <li>
        <router-link :to="{name:'load-more'}">下拉上拉</router-link>
      </li>
      <br>
      <li>
        <router-link :to="{name:'infinite-scroll'}">滚动自动加载</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'W'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
