<template>
  <div class="container">
    <header>
      <van-search
        v-model="value"
        show-action
        background="#fff"
        placeholder="618省钱卡, 花6元得36元"
        @search="onSearch"
        @cancel="$router.push('/')"
      />
      <div class="title">
        热门搜索
      </div>
      <nav>
        <a
          v-for="(list,index) in searchinit"
          :key="index"
          @click="goSearch(list.keyword)"
        >{{list.keyword}}</a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      value: '',
      searchinit: []
    }
  },
  methods: {
    // 发送异步请求
    async getSearchInit () {
      await this.$store.dispatch('getsearchinit')
        .then(() => {
          this.searchinit = this.$store.state.searchinit.search.hotKeywordVOList
        })
    },
    onSearch (val) {
      this.$router.push({ path: '/searchlist', query: { name: val } })
    },
    goSearch(val){
      this.$router.push({ path: '/searchlist', query: { name: val } })
    }
  },
  mounted () {
    this.getSearchInit()
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
  width: 100%
  height: 100%
  background-color: #eeeeee
  header
    padding-bottom: 10px
    width: 100%
    background-color: #fff
    .title
      margin: 0 auto
      padding: 15px 0
      width: 95%
      color: #888
      font-size: 16px
    nav
      display: flex
      flex-wrap: wrap
      margin: 0 auto
      width: 95%
      a
        margin: 0 20px 20px 0
        padding: 5px
        border: 1px solid #000
        border-radius: 3px
        color: #000
        font-size: 12px
        &:nth-child(2n-1)
          border: 1px solid #f00
          color: #f00
</style>
