<template>
  <div class="container">
    <header>
      <navHeader />
      <div class="top">
        <div class="title">
          <div class="tt">
            <img
              src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png"
              class="u-title"
            >
            <span>严选好物 用心生活</span>
          </div>
          <img
            src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png"
            class="u-bg"
          >
        </div>
        <div class="w-swiper">
          <van-swipe
            class="my-swipe"
            indicator
            :loop="false"
            :width="90"
            touchable
            v-if="GoodBuy"
          >
            <van-swipe-item
              v-for="(val,index) in GoodBuy"
              :key="index"
            >
              <div class="swiper-slide">
                <div class="s1">
                  <div
                    v-for="value in val"
                    :key="value.id"
                  >
                    <img
                      :src="value.picUrl"
                      class="u-topPic"
                    >
                    <div class="m-detail">
                      <div class="u-mainText">{{value.mainTitle}}</div>
                      <div class="u-descText">{{value.viceTitle}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </header>
    <!-- 瀑布流 -->
    <div class="main">
      <div
        class="main-left"
        v-if="leftGoodMore"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="desc"
            v-for="(val,index) in leftGoodMore"
            :key="index"
          >
            <img
              class="desc-img"
              v-if="val.buyNow"
              :src="val.buyNow.itemUrl"
              alt=""
            >
            <img
              class="desc-img"
              v-else
              :src="val.picUrl"
              alt=""
            >
            <p>{{val.title}}</p>
            <div class="look">
              <div class="userInfo">
                <img
                  :src="val.avatar"
                  alt=""
                >
                <div class="username">{{val.nickname}}</div>
              </div>
              <div class="upArea">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                >
                <span>{{val.buyNow ? val.buyNow.countPrice : 99}}</span>
              </div>
            </div>
            <van-divider />
            <footer>
              <span>网易智造四季全物手动的撒旦</span>
              <a href="">去购买></a>
            </footer>
          </div>
        </van-list>
      </div>
      <div class="main-right">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="desc"
            v-for="(val,index) in rightGoodMore"
            :key="index"
          >
            <img
              class="desc-img"
              v-if="val.buyNow"
              :src="val.buyNow.itemUrl"
              alt=""
            >
            <img
              class="desc-img"
              v-else
              :src="val.picUrl"
              alt=""
            >
            <p>{{val.title}}</p>
            <van-divider />
            <div class="look">
              <div class="userInfo">
                <img
                  :src="val.avatar"
                  alt=""
                >
                <div class="username">{{val.nickname}}</div>
              </div>
              <div class="upArea">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                >
                <span>{{val.buyNow?val.buyNow.countPrice:99}}</span>
              </div>
            </div>
          </div>
        </van-list>

      </div>
    </div>

  </div>
</template>

<script>
// 引入navHeader
import navHeader from '../../components/navHeader'
export default {
  name: 'GoodBuy',
  data () {
    return {
      GoodBuy: {},
      page: 1,
      size: 1,
      leftGoodMore: [],
      rightGoodMore: [],
      list: [],
      loading: false,
      finished: false,
    }
  },
  components: {
    navHeader
  },
  watch: {
    "this.GoodBuy" () {
      this.GoodBuy = this.$store.state.goodbuy.goodbuy // 按照规范在这里应该去使用getters来获取数据
    }
  },
  methods: {
    // 重新设置数据
    resultGoodBuy (obj) {
      var F = 0, R = [];
      for (; ++F < obj.navList.length;) {
        R.push([obj.navList[F - 1], obj.navList[F]])
        F++
      }
      return R
    },
    // /获取左瀑布流数据
    async getLeftGoodBuyMore (page, size) {
      await this.$store.dispatch('getGoodBuyMore', { page, size })
      this.leftGoodMore.push(...this.$store.state.goodbuymore.goodbuymore.result[0].topics)
    },
    // 获取右边
    async getRightGoodBuyMore (page, size) {
      await this.$store.dispatch('getGoodBuyMore', { page, size })
      this.rightGoodMore.push(...this.$store.state.goodbuymore.goodbuymore.result[0].topics)
    },
    // 获取值得买
    async getGoodBuy () {
      await this.$store.dispatch('getGoodBuy')
      this.GoodBuy = this.resultGoodBuy(this.$store.state.goodbuy.goodbuy)
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      this.getLeftGoodBuyMore(this.page++, this.size++)
        .then(() => { this.loading = false; }).catch(() => { this.finished = true; })
      this.getRightGoodBuyMore(this.page++, this.size)
        .then(() => { this.loading = false; }).catch(() => { this.finished = true; })
    },
  },
  mounted () {
    this.getGoodBuy()
    this.getLeftGoodBuyMore(1, 1)
    this.getRightGoodBuyMore(5, 1)
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.my-swipe
  width: 100%
  height: 290px
  border: 1px solid #fff
  border-radius: 15px
  background-color: #fff
  color: #fff
  text-align: center
  font-size: 20px
.van-swipe-item
  width: 100px !imporant
.van-swipe__indicator
  background-color: #888 !important
.top
  position: relative
  width: 100%
  border-top: 2px solid #000
  .title
    position: relative
    width: 100%
    .tt
      position: absolute
      top: 30px
      left: 5px
      width: 100%
      .u-title
        width: 80px
        height: 40px
        vertical-align: bottom
      span
        display: inline-block
        padding-bottom: 7px
        color: #fff
    .u-bg
      width: 100%
  .w-swiper
    position: absolute
    top: 80px
    left: 50%
    margin-left: -47.5%
    width: 95%
    height: 290px
    border: 1px solid #fff
    border-radius: 15px
    .swiper-slide
      padding: 10px 0 0
      width: 90px
      height: 100%
      border: 1px solid #fff
      border-radius: 15px
      .s1
        display: flex
        flex-direction: column
        justify-content: space-between
        width: 100%
        height: 100%
        div
          display: flex
          flex-direction: column
          align-items: center
          width: 100%
          height: 100%
          img
            width: 70px
            height: 70px
          .m-detail
            .u-mainText
              margin-top: 5px
              color: #000
              font-weight: bold
              font-size: 14px
            .u-descText
              margin-top: 5px
              color: #888
              font-size: 10px
.main
  display: flex
  justify-content: space-between
  margin: 120px 0 50px 0
  padding: 0 5px
  width: 100%
  border: 1px solid #fff
  border-radius: 10px
  background-color: #eeeeee
  .main-left
    width: 49%
    .desc
      margin-bottom: 10px
      border: 1px solid #fff
      border-radius: 10px
      background-color: #fff
      .desc-img
        width: 100%
      p
        padding: 10px 3px
        font-size: 14px
      .look
        display: flex
        justify-content: space-between
        width: 100%
        .userInfo
          display: flex
          align-items: center
          img
            width: 30px
            height: 30px
            border-radius: 50%
          .username
            margin-left: 3px
            font-size: 12px
        .upArea
          display: flex
          align-items: center
          img
            width: 20px
            height: 20px
      footer
        padding: 5px 5px 10px
        width: 100%
        span
          display: inline-block
          overflow: hidden
          width: 65%
          text-overflow: ellipsis
          white-space: nowrap
          font-size: 12px
        a
          color: #f00
          font-size: 14px
  .main-right
    width: 49%
    .desc
      margin-bottom: 10px
      border: 1px solid #fff
      border-radius: 10px
      background-color: #fff
      .desc-img
        width: 100%
      p
        padding: 10px 3px 0
        font-size: 14px
      .look
        display: flex
        justify-content: space-between
        width: 100%
        .userInfo
          display: flex
          align-items: center
          img
            width: 30px
            height: 30px
            border-radius: 50%
          .username
            margin-left: 3px
            font-size: 12px
        .upArea
          display: flex
          align-items: center
          img
            width: 20px
            height: 20px
</style>
