<template>
  <div class="container">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for='el in homeList.focusList'
          class="swiper-slide"
          :key="el.id"
        >
          <img
            class="img"
            :src="el.picUrl"
          >
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- policy -->
    <div class="policy">
      <ul class="grow">
        <li
          class="item"
          v-for="policy in homeList.policyDescList"
          :key="policy.desc"
        >
          <i :style="`background-image: url(${policy.icon})`"></i>
          <span>{{policy.desc}}</span>
        </li>
      </ul>
    </div>
    <!-- kingkongCarousel -->
    <div
      class="kingkongCarousel"
      v-if="homeList.kingKongModule"
    >
      <a
        :href="king.schemeUrl"
        v-for="king in homeList.kingKongModule.kingKongList"
        :key="king.text"
      >
        <div class="icon">
          <img
            :src="king.picUrl"
            alt=""
          >
        </div>
        <span>{{king.text}}</span>
      </a>
    </div>
    <!-- bigPromotionModule -->
    <div
      class="bigPromotionModule"
      v-if="homeList.bigPromotionModule"
    >
      <div class="bigmain">
        <div
          class="floor-top"
          :style="`background-image: url('${homeList.bigPromotionModule.floorList[0].cells[0].picUrl}'); background-size: 100% 100%`"
        >
          <a :href="homeList.bigPromotionModule.floorList[0].cells[0].schemeUrl">
            <div class="promGood">
              <img
                :src="homeList.bigPromotionModule.floorList[0].cells[0].itemList[index].picUrl"
                alt=""
              >
            </div>
          </a>
        </div>
        <div
          class="floor-top floor-main"
          :style="`background-image: url('${homeList.bigPromotionModule.floorList[1].cells[0].picUrl}'); background-size: 100% 100%`"
        >
          <a :href="homeList.bigPromotionModule.floorList[1].cells[0].schemeUrl">
          </a>
        </div>
        <div class="floor-top floor-main floor-bottom">
          <a
            :href="homeList.bigPromotionModule.floorList[1].cells[0].schemeUrl"
            style='background: url("https://yanxuan.nosdn.127.net/6dcc77404c668228e6a625c9c575820d.png?quality=75&type=webp&imageView&thumbnail=250x0") 0% 0% / 100% 100%;'
          >
          </a>
          <a
            :href="homeList.bigPromotionModule.floorList[1].cells[0].schemeUrl"
            style='background: url("https://yanxuan.nosdn.127.net/4041dab6e7020f03a67ee3ba0f5f6040.png?quality=75&type=webp&imageView&thumbnail=250x0") 0% 0% / 100% 100%;'
          >
          </a>
          <a
            :href="homeList.bigPromotionModule.floorList[1].cells[0].schemeUrl"
            style='background: url("https://yanxuan.nosdn.127.net/079bda44521cb076f4071dd555d2fabd.png?quality=75&type=webp&imageView&thumbnail=250x0") 0% 0% / 100% 100%;'
          >
          </a>
        </div>
      </div>
    </div>
    <!-- 新人 -->
    <div class="newPerson">
      <div class="title">
        <span>新人专享礼</span>
      </div>
      <div class="content">
        <div class="left">
          <span>新人专享礼包</span>
          <img
            src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
            alt=""
          >
        </div>
        <div class="right">
          <div class="top">
            <p class="top-1">福利社</p>
            <p class="top-2">今日特价</p>
            <img
              src="https://yanxuan-item.nosdn.127.net/7e4db021bc68c9af8eddecdb1aa96c36.png"
              alt=""
            >
            <div class="toto">
              <span>￥15.2</span>
              <del>￥100</del>
            </div>
          </div>
          <div class="bottom">
            <p class="p-top">新人拼团</p>
            <p class="p-bottom">1元起包邮</p>
            <img
              src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png"
              alt=""
            >
            <div class="toto">
              <span>￥15.2</span>
              <del>￥100</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// 引入swiper
import Swiper from 'swiper'
// 引入辅助函数
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      index: 0,
      timer: null
    }
  },
  computed: {
    ...mapState({
      homeList: state => state.home.homeList
    })
  },
  methods: {
    // 定义一个循环图片的方法
    setTimer () {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          this.index++
          if (this.index === 10) {
            this.index = 0
          }
        }, 2000)
      }
    }
  },
  mounted () {
    this.setTimer()
    this.$store.dispatch('getHomeist')
  },
  watch: {
    homeList: {
      handler (val) {
        // 优化watch内部代码执行次数,如果没有数据,没必要创建Swiper
        if (val.length === 0) return
        // console.log('watch执行次数',this.carouselList.length)
        this.$nextTick(() => {
          // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      },
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.swiper-pagination-bullet
  width: 40px !importent
.container
  overflow-x: hidden
  margin-bottom: 50px
  width: 100%
  .swiper-container
    width: 100%
    height: 150px
    img
      width: 100%
      height: 100%
  .policy
    margin: 0 auto
    width: 90%
    .grow
      display: flex
      justify-content: space-between
      align-items: center
      width: 100%
      height: 40px
      li
        display: flex
        justify-content: space-evenly
        align-items: center
        width: 33.3333333%
        i
          display: inline-block
          width: 20px
          height: 20px
          background-size: 100% 100%
        span
          font-size: 12px
  .kingkongCarousel
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    margin: 0 auto
    width: 95%
    a
      display: flex
      flex-direction: column
      justify-content: space-evenly
      align-items: center
      width: 20%
      height: 100px
      .icon
        width: 80%
        height: 55%
      img
        width: 100%
        height: 100%
  .bigPromotionModule
    padding-bottom: 20px
    width: 100%
    background-color: #eeeeee
    .bigmain
      margin: 0 auto
      width: 95%
      .floor-top
        position: relative
        height: 100px
        border-radius: 10px
        .promGood
          position: absolute
          top: 13%
          left: 10%
          width: 80px
          height: 80px
          img
            width: 100%
            height: 100%
      .floor-main
        margin-top: 10px
      .floor-bottom
        display: flex
        justify-content: space-between
        a
          width: 32%
  .newPerson
    margin: 0 auto
    width: 95%
    .title
      position: relative
      width: 100%
      height: 45px
      color: #888
      text-align: center
      font-size: 18px
      line-height: 45px
      &:after
        position: absolute
        top: 50%
        left: 28%
        margin-top: -3px
        width: 20px
        height: 2px
        background-color: #888
        content: ''
      &:before
        position: absolute
        top: 50%
        right: 28%
        margin-top: -3px
        width: 20px
        height: 2px
        background-color: #888
        content: ''
    .content
      display: flex
      justify-content: space-between
      width: 100%
      height: 280px
      .left
        width: 49.5%
        height: 100%
        background-color: #f9e9cf
        span
          display: inline-block
          padding: 25px 0 0 20px
          font-size: 20px
        img
          display: block
          margin: 50px auto 0
          width: 90%
      .right
        display: flex
        flex-direction: column
        justify-content: space-between
        width: 49.5%
        height: 100%
        .top
          position: relative
          width: 100%
          height: 49.5%
          background-color: #fbe2d3
          .top-1
            padding: 20px 0 0 20px
            font-size: 20px
          .top-2
            padding: 10px 0 0 18px
            color: #888
          img
            position: absolute
            top: 12%
            right: -10%
            width: 120px
          .toto
            position: absolute
            top: 8%
            right: 3%
            width: 50px
            height: 50px
            border-radius: 50%
            background-color: #f4a447
            color: #fff
            opacity: 0.8
            span
              display: inline-block
              padding: 12px 0 2px 5px
              font-size: 12px
            del
              padding-left: 10px
              font-size: 10px
        .bottom
          position: relative
          width: 100%
          height: 49.5%
          background-color: #ffecc2
          .p-top
            padding: 20px 0 0 20px
            font-size: 20px
          .p-bottom
            margin: 5px 0 0 17px
            width: 82px
            height: 22px
            background-color: rgba(0, 0, 0, 0.2)
            color: #fff
            text-align: center
            font-size: 14px
            line-height: 22px
          img
            position: absolute
            top: 15%
            right: -8%
            width: 120px
            height: 120px
          .toto
            position: absolute
            top: 10%
            right: 3%
            width: 50px
            height: 50px
            border-radius: 50%
            background-color: #f4a447
            color: #fff
            opacity: 0.8
            span
              display: inline-block
              padding: 12px 0 2px 5px
              font-size: 12px
            del
              padding-left: 10px
              font-size: 10px
</style>
