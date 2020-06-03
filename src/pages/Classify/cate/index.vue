<template>
  <div class="container">
    <header>
      <div class="top">
        <img
          src="https://yanxuan.nosdn.127.net/761877bc4e2cf50d7c424a8a7e6378bf.jpg"
          alt=""
        >
        <div class="categorylist">
          <ul v-if="catelist[index]">
            <li
              v-for="(val,i) in catelist[index].categoryList"
              :key="i"
              @click="todesc(i)"
            >
              <img
                v-lazy="val.bannerUrl"
                v-if="val.bannerUrl"
                :src="val.bannerUrl"
                alt=""
              >
              <img
                v-lazy="val.wapBannerUrl"
                v-else
                :src="val.wapBannerUrl"
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
export default {
  name: 'cate',
  data () {
    return {
      index: this.$route.query.index,
      catelist: []
    }
  },
  computed: {
  },
  methods: {
    todesc (index) {
      if (index === 0) {
        this.$router.push('/desc')
      }
    },
    // 发送请求
    async getCatelist () {
      await this.$store.dispatch('getCateList')
        .then(() => { this.catelist = this.$store.state.classify.catelist })
    }
  },
  mounted () {
    this.getCatelist()
  },
  watch: {
    '$route' () {
      this.index = this.$route.query.index
    }
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
