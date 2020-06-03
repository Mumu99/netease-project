<template>
  <van-sticky :offset-top="0">
    <div class="header">
      <!-- 标题 -->
      <div class="line">
        <a
          href="/"
          class="logo"
        ></a>
        <div
          class="topIpt"
          @click="toSearch"
        >
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共28214款好物</span>
        </div>
        <div class="login">登录</div>
      </div>
      <!-- 导航Nav -->
      <div class="tabNav">
        <header>
          <div
            class="tabAlter"
            v-show="isShowMask"
          >全部频道</div>
          <div
            class="tabs"
            v-show="!isShowMask"
          >
            <van-tabs
              v-model="active"
              sticky
              swipeable
              line-height="3px"
              title-active-color="#f00"
            >
              <van-tab
                v-for="(nav,index) in navList"
                :title="nav.name"
                :key="index"
                :to="index === 1  ? '/familylife' : '/'"
              >
              </van-tab>
            </van-tabs>
          </div>
          <div
            class="toggle"
            @click="isShowMask = !isShowMask"
          >
            <van-icon
              v-show="!isShowMask"
              name="arrow-down"
              size="20"
              color="#666"
            />
            <van-icon
              v-show="isShowMask"
              name="arrow-up"
              size="20"
              color="#666"
            />
          </div>
        </header>
        <div
          class="mask"
          v-show="isShowMask"
        >
          <div
            v-for="(nav,index) in navList"
            :key="index"
            :class="{active:index===active}"
            @click="activeCard(index)"
          >{{nav.name}}</div>
        </div>
      </div>
    </div>
    <div
      class="mak"
      v-show="isShowMask"
    ></div>
  </van-sticky>

</template>

<script>
// 引入辅助函数
import { mapState } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      isShowMask: false // 默认不展示mask
    }
  },
  computed: {
    ...mapState({
      navList: state => state.header.navList
    })
  },
  methods: {
    // 下拉的选中
    activeCard (index) {
      this.active = index
      this.isShowMask = !this.isShowMask
      if (index === 1 && this.$route.path != '/familylife') {
        this.$router.push('/familylife')
      } else {
        this.$router.push('/')
      }
    },
    // 点击去搜索页面
    toSearch () {
      this.$router.push('/search')
    }
  },
  mounted () {
    this.$store.dispatch('getNavList')
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.header
  position: relative
  z-index: 5
  border-bottom: 1px solid #d9d9d9
  background-color: #fff
  .line
    position: relative
    z-index: 3
    display: flex
    flex-flow: row nowrap
    align-items: center
    padding: 10px 15px
    width: 100%
    height: 40px
    background-color: #fff
    .logo
      display: inline-block
      margin-right: 10px
      width: 67px
      height: 18px
      background-image: url('../../assets/logo.png')
      background-position: center
      background-size: cover
    .topIpt
      display: flex
      justify-content: center
      align-items: center
      width: 210px
      height: 25px
      border-radius: 5px
      background-color: #ededed
      .icon
        margin-right: 5px
        width: 20px
        height: 20px
        background: url('../../assets/35.png') 0 99%
        background-size: 300%
      .placeholder
        color: #666
        font-size: 14px
    .login
      margin-left: 10px
      width: 50px
      height: 25px
      border: 1px solid #f00
      border-radius: 5px
      color: #f00
      text-align: center
      line-height: 23px
  .tabNav
    position: relative
    z-index: 3
    width: 100%
    header
      position: relative
      .tabAlter
        padding-left: 15px
        height: 40px
        color: #626262
        font-weight: bold
        line-height: 40px
      .tabs
        margin-bottom: 5px
        padding-right: 60px
        width: 100%
        height: 40px
      .toggle
        position: absolute
        top: 50%
        right: 0
        display: flex
        justify-content: center
        align-items: center
        margin-top: -15px
        width: 60px
        height: 30px
        background-color: #fff
    .mask
      position: absolute
      z-index: 3
      overflow: hidden
      margin: 0 auto
      width: 100%
      background-color: #fff
      div
        display: flex
        justify-content: center
        align-items: center
        float: left
        margin: 0 0 20px 18px
        width: 70px
        height: 30px
        border: 1px solid #626262
        border-radius: 5px
        font-size: 12px
        &.active
          border: 1px solid #f00
          color: #f00
.mak
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 2
  background: rgba(0, 0, 0, 0.5)
</style>
