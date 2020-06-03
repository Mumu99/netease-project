<template>
  <div class="container">
    <header>
      <div class="top">
        <img
          src="https://yanxuan.nosdn.127.net/761877bc4e2cf50d7c424a8a7e6378bf.jpg"
          alt=""
        >
        <div class="categorylist">
          <ul v-if="catelist[0]">
            <li
              v-for="(val,index) in catelist[2].categoryList"
              :key="index"
              @click="todesc(index)"
            >
              <img
                v-lazy="val.bannerUrl"
                :src="val.bannerUrl"
                alt=""
              >
              <p>{{val.name}}</p>
            </li>
          </ul>
        </div>
      </div>

    </header>
  </div>
</template>

<script>
// 引入辅助函数
import { mapState } from 'vuex'
export default {
  name: 'cate',
  computed: {
    ...mapState({
      catelist: state => state.classify.catelist
    })
  },
  methods: {
    todesc (index) {
      if (index === 0) {
        this.$router.push('/desc')
      }
    }
  },
  mounted () {
    this.$store.dispatch('getCateList')
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
header
  .top
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
