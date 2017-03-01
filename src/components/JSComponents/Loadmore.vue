<template>
  <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
    >
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        list: [],
        allLoaded: false,
        wrapperHeight: 0
      }
    },
    methods: {
      loadBottom(){
        let self = this;
        if (this.list.length > 400)
          this.allLoaded = true;
        for (let i = 1; i <= 20; i++) {
          console.log(self.list[self.list.length - 1] + 1);
          this.list.push(self.list[self.list.length - 1] + 1)
        }
        this.$refs.loadmore.onBottomLoaded();
      },
      loadTop(){
        let self = this;
        for (let i = 1; i <= 20; i++) {
          this.list.unshift(self.list[0] - 1)
        }
        this.$refs.loadmore.onTopLoaded();
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
