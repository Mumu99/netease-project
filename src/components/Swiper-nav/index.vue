<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        v-for='(el,index) in nlist[1].bannerUrl'
        class="swiper-slide"
        :key="index"
      >
        <img
          class="img"
          :src="el.url"
        >
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from 'swiper'
export default {
  name: 'Swiper-nav',
  props: ['nlist'],
  watch: {
    nlist: {
      handler (val) {
        // 优化watch内部代码执行次数,如果没有数据,没必要创建Swiper
        if (val.length === 0) return
        // console.log('watch执行次数',this.carouselList.length)
        this.$nextTick(() => {
          // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
             autoplay: true,
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
.swiper-container
  width: 100%
  height: 150px
  img
    width: 100%
    height: 100%
</style>
