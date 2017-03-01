<template>
  <div id="load-more">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>

</script>

<style>

</style>
