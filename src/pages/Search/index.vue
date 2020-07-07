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
        autofocus
        @input="inputSearch"
        @keyup="inputSearch"
      />
      <!-- 历史记录 -->
      <div class="ls">
        <div
          class="m-searchSuggestions"
          v-if="history.length"
        >
          <header class="hd">
            <h3 class="tit">历史记录</h3>
            <van-icon
              name="delete"
              size="20"
              @click="clearhistorykeyword"
            />
          </header>
          <nav class="list"><a
              class="item"
              v-for="(val,index) in history"
              :key="index"
            >{{val}}</a></nav>
        </div>
        <div class="title">
          热门搜索
        </div>
        <nav>
          <a
            v-for="(list,index) in searchinit"
            :key="index"
            :class="list.highlight === 1 ? 'show' : ''"
            @click="goSearch(list.keyword)"
          >{{list.keyword}}</a>
        </nav>
        <!-- 热词 -->
        <div
          class="hotKey"
          v-if="searchHot.length > 0"
        >
          <van-cell-group class="hot-ul">
            <van-cell
              v-for="(keyCode,index) in searchHot"
              :key="index"
              :title="keyCode"
              class="hot-item"
              is-link
              :to="{ path: '/searchlist', query: { name: keyCode } }"
              @click="addhistory(keyCode)"
            />
          </van-cell-group>
        </div>
      </div>

    </header>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  name: 'Search',
  data () {
    return {
      value: '',
      searchinit: [],
      history: this.$historyKeyword, // 用来保存搜索记录
      searchHot: [] // 存储搜索热词
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
    // 添加搜索记录
    addhistory (keyword) {
      this.$historyKeyword.push(keyword)
    },
    // 输入关键字搜索
    onSearch (val) {
      const value = val.trim()
      this.addhistory(value)
      this.$router.push({ path: '/searchlist', query: { name: val } })
    },
    // 点击热词搜索
    goSearch (val) {
      this.addhistory(val)
      this.$router.push({ path: '/searchlist', query: { name: val } })
    },
    // 清空数组的方法
    clearhistorykeyword () {
      this.$historyKeyword.splice(0, this.$historyKeyword.length)
      this.history = []
    },
    inputSearch (a) {
      const that = this
      this.keycode(a, that)
    },
    // 利用防抖函数
    keycode: debounce(async (a, that) => {
      let hotKey
      if (a.target) {
        if (a.code === 'Enter') return
        hotKey = a.target.value
      } else {
        hotKey = a
        return
      }
      const objSearch = `keywordPrefix=${hotKey}`
      await that.$store.dispatch('getSearchHot', objSearch).then(() => that.searchHot = that.$store.state.searchHot.search)
    }, 500)
  },
  mounted () {
    this.getSearchInit()
    console.log(this.$historyKeyword);
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
    .ls
      position: relative
      .m-searchSuggestions
        margin-bottom: 15px
        padding: 10px 10px
        width: 100%
        background-color: #fff
        .hd
          display: flex
          justify-content: space-between
          width: 100%
          .tit
            color: #888
            font-weight: 400
            font-size: 16px
          .van-icon
            margin-right: 5px
      .title
        margin: 0 auto
        padding: 15px 10px
        width: 100%
        background-color: #fff
        color: #888
        font-size: 16px
      nav
        display: flex
        flex-wrap: wrap
        margin: 0 auto
        padding: 0 10px
        width: 100%
        background-color: #fff
        a
          margin: 0 20px 20px 0
          padding: 5px
          border: 1px solid #000
          border-radius: 3px
          color: #000
          font-size: 12px
          &.show
            border: 1px solid #f00
            color: #f00
      .hotKey
        position: absolute
        top: 0
        left: 0
        width: 100%
        .hot-ul
          width: 100%
          .hot-item
            width: 100%
            height: 55px
            border-bottom: 0.5px solid #f4f4f4
            background-color: #fff
</style>
