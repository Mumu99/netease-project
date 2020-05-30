<template>
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
</template>

<script>
export default {
  name: 'BigPromotionModule',
  data () {
    return {
      index: 0, // 定义轮播的下标
      timer: null // 定义定时器
    }
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
    // 开启定时器的共能
    this.setTimer()
  },
  // 接收父级组件传递的数据
  props: ['homeList']
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
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
</style>
