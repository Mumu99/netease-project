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
      <div
        class="content"
        v-if="homeList.indexActivityModule"
      >
        <div class="left">
          <span>{{homeList.indexActivityModule[0].title}}</span>
          <img
            :src="homeList.indexActivityModule[0].picUrl"
            alt=""
          >
        </div>
        <div class="right">
          <div class="top">
            <p class="top-1">{{homeList.indexActivityModule[1].title}}</p>
            <p class="top-2">{{homeList.indexActivityModule[1].subTitle}}</p>
            <img
              :src="homeList.indexActivityModule[1].picUrl"
              alt=""
            >
            <div class="toto">
              <span>{{homeList.indexActivityModule[1].activityPrice}}</span>
              <del>{{homeList.indexActivityModule[1].originPrice}}</del>
            </div>
          </div>
          <div class="bottom">
            <p class="p-top">{{homeList.indexActivityModule[2].title}}</p>
            <p class="p-bottom">{{homeList.indexActivityModule[2].subTitle}}</p>
            <img
              :src="homeList.indexActivityModule[2].picUrl"
              alt=""
            >
            <div class="toto">
              <p>{{homeList.indexActivityModule[2].activityPrice}}</p>
              <del>{{homeList.indexActivityModule[2].originPrice}}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <div class="categoryFloor">
      <div class="title">
        <h2>类目热销榜</h2>
      </div>
      <div class="content">
        <div class="line1">
          <div class="left">
            <p>热销榜</p>
            <img
              src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png"
              alt=""
            >
          </div>
          <div class="right">
            <p>热销榜</p>
            <img
              src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png"
              alt=""
            >
          </div>
        </div>
        <div class="line2">
          <div class="item">
            <div class="name">居家生活榜</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/98306048b521ca3246ea9cd386d47081.png"
              alt=""
            >
          </div>
          <div class="item">
            <div class="name">居家生活榜</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/98306048b521ca3246ea9cd386d47081.png"
              alt=""
            >
          </div>
          <div class="item">
            <div class="name">居家生活榜</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/98306048b521ca3246ea9cd386d47081.png"
              alt=""
            >
          </div>
          <div class="item">
            <div class="name">居家生活榜</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/98306048b521ca3246ea9cd386d47081.png"
              alt=""
            >
          </div>
          <div class="item">
            <div class="name">居家生活榜</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/98306048b521ca3246ea9cd386d47081.png"
              alt=""
            >
          </div>
          <div class="item">
            <div class="name">居家生活榜</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/98306048b521ca3246ea9cd386d47081.png"
              alt=""
            >
          </div>
          <div class="item">
            <div class="name">居家生活榜</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/98306048b521ca3246ea9cd386d47081.png"
              alt=""
            >
          </div>
          <div class="item">
            <div class="name">居家生活榜</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/98306048b521ca3246ea9cd386d47081.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="personFloor">
      <div class="title">
        <h2>人气推荐</h2>
        <a href="">更多 ></a>
      </div>
      <a class="top">
        <img
          src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png"
          alt=""
          style="background-image:url(//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png);opacity:0.8"
        >
        <div class="right">
          <p class="right-p1">15分钟快速救脸，射频多功能美容仪</p>
          <p class="right-p2">掌心里的“美容院”</p>
          <p class="right-p3">￥899</p>
        </div>
      </a>
      <div class="bottom">
        <a class="item">
          <img
            src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt=""
          >
          <p class="item-p1">【抢购】一次性医用口罩 100支, 快速抢购</p>
          <p class="item-p2">￥60</p>
          <div class="tj">特价</div>
        </a>
        <a class="item">
          <img
            src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt=""
            style="margin-left:5px"
          >
          <p class="item-p1">【抢购】一次性医用口罩 100支, 快速抢购</p>
          <p class="item-p2">￥60</p>
        </a>
        <a class="item">
          <img
            src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt=""
            style="margin-left:10px"
          >
          <p class="item-p1">【抢购】一次性医用口罩 100支, 快速抢购</p>
          <p class="item-p2">￥60</p>
        </a>
      </div>
    </div>
    <!-- 限时购 -->
    <div class="flashFloor">
      <div class="title">
        <div class="left">
          <h2>限时购</h2>
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <a href="">更多 ></a>
      </div>
      <div class="content">
        <a class="item">
          <img
            src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt=""
          >
          <div class="item-p">
            <span class="item-p2">￥60</span>
            <del>￥139</del>
          </div>

        </a>
        <a class="item">
          <img
            src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt=""
          >
          <div class="item-p">
            <span class="item-p2">￥60</span>
            <del>￥139</del>
          </div>
        </a>
        <a class="item">
          <img
            src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt=""
          >
          <div class="item-p">
            <span class="item-p2">￥60</span>
            <del>￥139</del>
          </div>
        </a>
        <a class="item">
          <img
            src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt=""
          >
          <div class="item-p">
            <span class="item-p2">￥60</span>
            <del>￥139</del>
          </div>
        </a>
        <a class="item">
          <img
            src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt=""
          >
          <div class="item-p">
            <span class="item-p2">￥60</span>
            <del>￥139</del>
          </div>
        </a>
        <a class="item">
          <img
            src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt=""
          >
          <div class="item-p">
            <span class="item-p2">￥60</span>
            <del>￥139</del>
          </div>
        </a>
      </div>
    </div>
    <!-- 底部 -->
    <footer>
      <header>
        <a href="">下载APP</a>
        <a href="">电脑版</a>
      </header>
      <footer>
        <p>网易公司版权所有 © 1997-<span>2020</span></p>
        <p>食品经营许可证：JY13301080111719</p>
      </footer>
    </footer>
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
      timer: null,
      time: 60 * 60 * 60 * 1000,
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
    padding: 0 15px
    width: 100%
    background-color: #fff
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
    padding: 0 10px
    width: 100%
    background-color: #fff
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
    padding: 0 10px 20px
    width: 100%
    background-color: #fff
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
              padding: 12px 0 0px 12px
              font-size: 16px
            del
              padding-left: 17px
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
            p
              padding: 10px 0 0px 17px
              font-size: 16px
            del
              padding-left: 16px
              font-size: 10px
  .categoryFloor
    margin-top: 10px
    padding: 0 10px 10px
    width: 100%
    background-color: #fff
    .title
      width: 100%
      h2
        padding: 20px 0 20px 0
        color: #888
        font-size: 18px
    .content
      width: 100%
      .line1
        display: flex
        justify-content: space-between
        width: 100%
        .left
          position: relative
          box-sizing: border-box
          width: 49.5%
          height: 110px
          background-color: #f9f3e4
          p
            position: relative
            padding: 45px 0 0 10px
            font-size: 17px
            &::after
              position: absolute
              bottom: -20%
              left: 11px
              width: 30px
              height: 3px
              background-color: #000
              content: ''
          img
            position: absolute
            top: 2%
            right: -5%
            width: 110px
            height: 110px
        .right
          position: relative
          box-sizing: border-box
          width: 49.5%
          height: 110px
          background-color: #ebeff6
          p
            position: relative
            padding: 45px 0 0 10px
            font-size: 17px
            &::after
              position: absolute
              bottom: -20%
              left: 11px
              width: 30px
              height: 3px
              background-color: #000
              content: ''
          img
            position: absolute
            top: 2%
            right: -5%
            width: 110px
            height: 110px
      .line2
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        width: 100%
        height: 200px
        .item
          display: flex
          flex-direction: column
          justify-content: space-around
          align-items: center
          margin-top: 5px
          width: 24%
          background-color: #f5f5f5
          .name
            padding-top: 10px
            font-size: 12px
          img
            width: 60px
            height: 60px
  .personFloor
    display: flex
    flex-direction: column
    margin-top: 10px
    padding: 0 10px
    width: 100%
    background-color: #fff
    .title
      display: flex
      justify-content: space-between
      align-items: center
      width: 100%
      h2
        padding: 20px 0 20px 0
        color: #888
        font-size: 18px
      a
        color: #222
    .top
      display: flex
      align-items: center
      width: 100%
      background-color: #fef0df
      img
        width: 150px
        height: 150px
      .right
        .right-p1
          overflow: hidden
          width: 200px
          text-overflow: ellipsis
          white-space: nowrap
        .right-p2
          margin: 5px 0
          color: #888
          font-size: 14px
        .right-p3
          color: #f00
    .bottom
      display: flex
      justify-content: space-between
      margin-top: 10px
      width: 100%
      .item
        display: flex
        flex-direction: column
        margin-bottom: 20px
        width: 49%
        img
          width: 110px
          height: 110px
          background-color: #f5f5f5
        .item-p1
          display: -webkit-box
          overflow: hidden
          margin: 5px 0
          width: 110px
          text-align: left
          text-overflow: ellipsis
          font-size: 14px
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
        .item-p2
          color: #f00
        .tj
          margin: 5px 0 0
          width: 30px
          height: 15px
          border: 1px solid #f00
          border-radius: 10px
          color: #f00
          text-align: center
          font-size: 12px
  .flashFloor
    display: flex
    flex-direction: column
    margin-top: 10px
    padding: 0 10px
    width: 100%
    background-color: #fff
    .title
      display: flex
      justify-content: space-between
      align-items: center
      width: 100%
      .left
        display: flex
        align-items: center
        padding: 20px 0 20px 0
        h2
          color: #888
          font-size: 18px
        .colon
          display: inline-block
          margin-left: 3px
          color: #000
        .block
          display: inline-block
          margin-left: 5px
          width: 20px
          border-radius: 5px
          background-color: #000
          color: #fff
          text-align: center
          font-size: 12px
      a
        color: #222
    .content
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      width: 100%
      height: 300px
      .item
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: center
        width: 31%
        height: 130px
        img
          width: 110px
          height: 110px
          background-color: #f5f5f5
        .item-p
          .item-p2
            margin-left: -20px
            color: #f00
          del
            margin-left: 10px
            color: #888
  footer
    padding: 20px 30px 10px
    width: 100%
    background-color: #414141
    header
      display: flex
      justify-content: space-evenly
      width: 100%
      a
        display: inline-block
        width: 110px
        height: 35px
        border: 1px solid #6a6a6a
        border-radius: 2px
        color: #fff
        text-align: center
        line-height: 35px
    footer
      color: #6a6a6a
      font-size: 14px
      p
        margin-top: 5px
        text-align: center
</style>
