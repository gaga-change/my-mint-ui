<template>
  <div>
    <div  ref="wrapper"  style="height: 200px;background-color: #5dc4a1"></div>
    <div  :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore
        :top-method="loadTop"
        ref="loadmore"
      >
        <ul class="page-infinite-list"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="500">
          <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
        </ul>
        <p v-show="loading" class="page-infinite-loading">
          <mt-spinner v-if="!allLoaded" type="fading-circle"></mt-spinner>

          <span v-if="!allLoaded">加载中...</span>
          <span v-if="allLoaded">加载结束</span>
        </p>

      </mt-loadmore>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        list: [],
        wrapperHeight: 0,
        loading: false,
        allLoaded: false
      }
    },
    methods: {
      loadMore() {
        this.loading = true;
        const self = this;
        setTimeout(function () {
          if (self.list.length >= 50) {
            console.log(" 结束");
            self.allLoaded = true;
            return;
          }

          let last = self.list[self.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            self.list.push(last + i);
          }
          self.loading = false;
        }, 500);
      },
      loadTop(){
        let self = this;
        setTimeout(function () {
          for (let i = 1; i <= 20; i++) {
            self.list.unshift(self.list[0] - 1)
          }
          self.$refs.loadmore.onTopLoaded();
        }, 10);
      }
    },
    created(){
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>

<style scoped>

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul > li {
    border-bottom: 1px solid gainsboro;
    padding: 20px 10px;
  }

  ul > li:nth-child(even) {
    background-color: #bbefa0;
  }
</style>
