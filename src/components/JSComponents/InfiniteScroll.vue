<template>
  <div>
    <div ref="wrapper" style="height: 200px;background-color: #5dc4a1"></div>
    <div :style="{ height: wrapperHeight + 'px' }">
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
        self.updateBottom().then(function (noData) {
          if (noData) {
            self.allLoaded = true;
          } else {
            self.loading = false;
          }
        });
      },
      loadTop(){
        let self = this;
        setTimeout(function () {
          for (let i = 1; i <= 20; i++) {
            self.list.unshift(self.list[0] - 1)
          }
          self.$refs.loadmore.onTopLoaded();
        }, 10);
      },
      updateBottom: function () {
        const self = this;
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            if (self.list.length >= 50) {
              console.log(" 结束");
              let noData = true;
              resolve(noData);
              return;
            }
            let last;
            if (self.list.length == 0) {
              last = 0;
            } else {
              last = self.list[self.list.length - 1];
            }
            console.log(last);
            for (let i = 1; i <= 10; i++) {
              self.list.push(last + i);
            }
            resolve();
          }, 500000);
        })
      },
      updateTop: function () {

      }
    },
    created(){
//      for (let i = 1; i <= 20; i++) {
//        this.list.push(i);
//      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .page-infinite-loading {
    text-align: center;
    height: 50px;
    line-height: 50px;

  }
  .page-infinite-loading div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>
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
