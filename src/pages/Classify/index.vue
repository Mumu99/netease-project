<template>
  <div class="container">
    <!-- 标题 -->
    <div class="line">
      <div class="topIpt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共28214款好物</span>
      </div>
    </div>
    <div class="catelist">
      <van-sidebar
        v-model="activeKey"
        @change="onChange"
      >
        <van-sidebar-item
          :title="list.name"
          v-for="(list,index) in catelist"
          :key="index"
        />
      </van-sidebar>
      <div class="right">
        <div
          class="content"
          v-if="isShowContent"
        >
          <img
            src="https://yanxuan.nosdn.127.net/2c669cac8b0844bbd2620a5172a53dbd.jpg"
            alt=""
          >
          <div class="categorylist">
            <ul v-if="catelist[0]">
              <li
                v-for="(val,index) in catelist[0].categoryList"
                :key="index"
              >
                <img
                  :src="val.bannerUrl"
                  alt=""
                >
                <p>{{val.name}}</p>
              </li>
            </ul>
          </div>
        </div>
        <router-view v-else></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 引入辅助函数
import { mapState } from 'vuex'
export default {
  name: "Classify",
  data () {
    return {
      activeKey: 0,
      isShowContent: true
    }
  },
  methods: {
    onChange (index) {
      if (index === 1) {
        this.isShowContent = false
        this.$router.push('/classify/cate')
      } else {
        this.isShowContent = true
      }
    },
  },
  computed: {
    ...mapState({
      catelist: state => state.classify.catelist
    })
  },
  mounted () {
    this.$store.dispatch('getCateList')
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.van-sidebar
  padding-bottom: 35px
  border-right: 1px solid #888
.van-sidebar-item
  padding: 15px 10px 10px 10px
  background-color: #fff
.container
  width: 100%
  height: 100%
  background-color: #fff
  .line
    padding: 10px 15px
    width: 100%
    height: 40px
    background-color: #fff
    .topIpt
      display: flex
      justify-content: center
      align-items: center
      width: 100%
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
  .catelist
    display: flex
    .right
      padding: 10px 0 0 15px
      width: 275px
      .content
        width: 100%
        img
          width: 100%
        ul
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          width: 100%
          li
            display: flex
            flex-direction: column
            align-items: center
            margin-top: 15px
            width: 33%
            img
              width: 60px
              height: 60px
            p
              overflow: hidden
              width: 100%
              text-overflow: ellipsis
              white-space: nowrap
              font-size: 14px
</style>