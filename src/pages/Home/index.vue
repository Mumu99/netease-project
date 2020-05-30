<template>
  <div class="container">
    <!-- 轮播图 -->
    <Swiper :homeList="homeList" />
    <!-- policy -->
    <Policy :homeList="homeList" />
    <!-- kingkongCarousel -->
    <KingkongCarousel :homeList="homeList" />
    <!-- bigPromotionModule -->
    <BigPromotionModule :homeList="homeList" />
    <!-- 新人 -->
    <IndexActivityModule :homeList="homeList" />
    <!-- 热销 -->
    <CategoryFloor :homeList="homeList" />
    <!-- 人气销售 -->
    <PersonFloor :homeList="homeList" />
    <!-- 限时销售 -->
    <FlashFloor :homeList="homeList" />
    <!-- 底部 -->
    <HomeFooter :homeList="homeList" />
  </div>

</template>

<script>
// 引入辅助函数
import { mapState } from 'vuex'
// 引入swiper
import Swiper from '../../components/Swiper'
// 引入policy
import Policy from '../../components/Policy'
// 引入kingkongCarousel组件
import KingkongCarousel from '../../components/KingkongCarousel'
// 引入bigPromotionModule组件
import BigPromotionModule from '../../components/BigPromotionModule'
// 引入新人专享礼组件
import IndexActivityModule from '../../components/IndexActivityModule'
// 引入热销
import CategoryFloor from '../../components/CategoryFloor'
// 引入人气销售
import PersonFloor from '../../components/PersonFloor'
// 引入限时销售
import FlashFloor from '../../components/FlashFloor'
// 引入底部
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'Home',
  // 计算属性
  computed: {
    ...mapState({
      homeList: state => state.home.homeList
    })
  },
  // 注册组件
  components: {
    IndexActivityModule,
    BigPromotionModule,
    KingkongCarousel,
    Policy,
    Swiper,
    CategoryFloor,
    PersonFloor,
    FlashFloor,
    HomeFooter
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('getHomeist')
  }

}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
  margin-bottom: 50px
  width: 100%
</style>
