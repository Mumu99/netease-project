<template>
  <div class="container">
    <van-nav-bar title="网易严选">
      <template #left>
        <van-icon
          name="wap-home-o"
          size="30"
          color="#000"
          @click="goHome"
        />
      </template>
      <template #right>
        <van-icon
          name="search"
          size="30"
          color="#000"
        />
        <van-icon
          name="shopping-cart-o"
          size="30"
          color="#000"
        />
      </template>
    </van-nav-bar>
    <!-- nav -->
    <div v-if="catelist">
      <van-tabs
        line-width='60px'
        v-if="catelist"
      >
        <van-tab
          v-for="(val,index) in catelist.categoryList"
          :key="index"
          :title="val.name"
        />
      </van-tabs>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="title">
        <p>口碑好物</p>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="catelist"
          v-if="catelist[4]"
        >
          <ul>
            <li
              v-for="(list,index) in catelist"
              :key="index"
            >
              <img
                :src="list.wapBannerUrl"
                alt=""
              >
              <img
                class="promoLogo"
                src="https://yanxuan.nosdn.127.net/a0036e9c81391f4d3a1e4fc3b06938e0.png"
                style="width: 50px; height: 50px;"
              >
              <div
                class="title"
                style="background-image: url('https://yanxuan.nosdn.127.net/c168892ef76f29971032dc1c12613720.png')"
              >
                <div
                  class="left"
                  style="background-image: url('https://yanxuan.nosdn.127.net/d71e2460d062eaa21d5bdf97eba9da89.png')"
                >
                  <p class="p1">618</p>
                  <p class="p2">￥1999起</p>
                </div>
                <span>限527件 仅剩9小时</span>
              </div>
              <div class="name">{{list.frontDesc}}</div>
              <p class="price">￥1999 <del>￥2499</del></p>
              <div class="toto">
                {{list.name}}
              </div>
            </li>
          </ul>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
// 引入辅助函数
// import { mapState } from 'vuex'
export default {
  name: 'desc1',
  data () {
    return {
      active: 0,
      catelist: [],
      loading: false,
      finished: false
    }
  },
  computed: {
    // ...mapState({
    //   catelist: state => state.classify.catelist[4]
    // })
  },
  methods: {
    goHome () {
      this.$router.replace('/')
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 1; i++) {
          this.catelist.forEach(item => this.catelist.push({
            wapBannerUrl: item.wapBannerUrl,
            frontDesc: item.frontDesc
          }))
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  },
  watch: {
    "this.catelist" () {
      this.catelist = this.$store.state.classify // 按照规范在这里应该去使用getters来获取数据
    }
  },
  mounted () {
    this.$store.dispatch('getCateList')
    setTimeout(() => {
      this.catelist = this.$store.state.classify.catelist[4].categoryList
    }, 1000);
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scope>
.van-nav-bar__title
  font-size: 20px
.van-icon-shopping-cart-o
  margin-left: 15px
.container
  width: 100%
  .content
    margin-top: 10px
    width: 100%
    background-color: #fff
    .title
      width: 100%
      height: 50px
      p
        width: 100%
        height: 100%
        text-align: center
        font-size: 14px
        line-height: 50px
    .catelist
      padding: 0 10px
      width: 100%
      ul
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        width: 100%
        li
          position: relative
          margin-top: 10px
          width: 48%
          img
            width: 170px
            height: 170px
            background-color: #eeeeee
            font-size: 0
          .promoLogo
            position: absolute
            top: 0
            left: 0
          .title
            position: relative
            margin-top: -3px
            width: 100%
            height: 30px
            .left
              position: absolute
              bottom: 0
              display: flex
              flex-direction: column
              justify-content: center
              width: 40%
              height: 40px
              border-top-right-radius: 30px
              p
                color: #fff
                line-height: 20px
            span
              padding-left: 70px
              color: #fff
              font-size: 12px
              line-height: 30px
          .name
            margin: 10px 0
            line-height: 19px
          .price
            padding-bottom: 5px
            color: #f00
            del
              color: #888
          .toto
            width: 65px
            height: 20px
            border: 1px solid #f00
            border-radius: 10px
            color: #f00
            text-align: center
            font-size: 12px
            line-height: 20px
</style>
