<template>
  <div class="container">
    <SwiperNav :nlist="nlist" />
    <!-- 头部 -->
    <header>
      <p>口碑好物</p>
      <p>口碑好物</p>
    </header>
    <!-- 图片 -->

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="goodGrid">
        <ul>
          <li
            v-for="list in navList"
            :key="list.id"
          >
            <img
              :src="list.wapBannerUrl"
              alt=""
            >
            <p>{{list.frontDesc}}</p>
            <span>￥1389</span>
          </li>
        </ul>
      </div>
    </van-list>
  </div>
</template>

<script>
// 引入计算属性
import { mapState } from 'vuex'
// 引入轮播图组件
import SwiperNav from '../../components/Swiper-nav'
export default {
  name: 'Familylife',
  data () {
    return {
      loading: false,
      finished: false,
      navList: this.$store.state.header.navList[1].subCateList
    }
  },
  // 计算属性
  computed: {
    ...mapState({
      nlist: state => state.header.navList
    })
  },
  components: {
    SwiperNav
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 1; i++) {
          this.navList.forEach((item) => this.navList.push({
            wapBannerUrl: item.wapBannerUrl,
            frontDesc: item.frontDesc
          }))
        }
        // 加载状态结束
        this.loading = false;
      }, 800);
    },
  },
  watch: {
    "this.navList" () {
      this.navList = this.$store.state.header.navList[1]; // 按照规范在这里应该去使用getters来获取数据
    }
  },
  mounted () {
    this.$store.dispatch('getNavList')
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
header
  margin-top: 10px
  background-color: #fff
  text-align: center
  p
    padding: 10px
    font-size: 18px
    &:nth-child(2)
      padding: 0
      color: #888
      font-size: 14px
.goodGrid
  padding: 0 10px
  width: 100%
  background-color: #fff
  ul
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    width: 100%
    li
      margin-top: 20px
      width: 49%
      img
        width: 166px
        height: 166px
      p
        padding: 10px 0
      span
        color: #f00
</style>
