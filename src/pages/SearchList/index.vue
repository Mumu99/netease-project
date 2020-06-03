<template>
  <div class="container">
    <div class="top">
      <van-sticky>
        <header>
          <van-icon
            name="wap-home-o"
            size="30"
            color="#000"
            @click="$router.replace('/')"
          />
          <van-search
            class="sear"
            v-model="value"
            background="#fff"
            placeholder="给你最好的咖啡榜"
            @cancel="$router.push('/')"
          >
            <div slot="right-icon">
              <van-icon
                name="cross"
                @click="$router.push('/search')"
              />
            </div>
          </van-search>
        </header>
        <!-- 三块 -->
        <div class="content">
          <div
            class="left"
            :class="index===1 ? 'act' : ''"
            @click="noShow"
          >综合</div>
          <div
            class="cen"
            @click="showXq"
            :class="index===2 ? 'act' : ''"
          >价格
            <div
              class="xq"
              v-if="isShowXq"
            >
              <div class="top">
                <div class="title">筛选</div>
                <div class="right">
                  <input
                    type="text"
                    placeholder="最低价"
                  > —
                  <input
                    type="text"
                    placeholder="最高价"
                  >
                </div>
              </div>
              <div class="xxd">
                <div class="title">排序</div>
                <div class="desc">从低到高</div>
                <div class="dsc">从高到低</div>
              </div>
              <footer>
                <van-button
                  block
                  plain
                  @click="onConfirm"
                  hairline
                >取消</van-button>
                <van-button
                  block
                  plain
                  @click="onConfirm"
                  hairline
                  class="ok"
                >确认</van-button>
              </footer>
            </div>
          </div>
          <div
            class="right"
            @click="showList"
            :class="index===3 ? 'act' : ''"
          >分类
            <nav
              class="list"
              v-if="isShowList"
            >
              <div>全部</div>
              <div>居家生活</div>
              <div>居家生活</div>
              <div>居家生活</div>
              <div>居家生活</div>
              <div>居家生活</div>
              <div>居家生活</div>
            </nav>
          </div>
        </div>
        <div
          class="mask"
          v-if="isShowXq || isShowList"
          @click="noShowEvery"
        ></div>
      </van-sticky>

      <div class="main">
        <div
          class="desc"
          v-for="(list,index) in dirlist"
          :key="index"
        >
          <img
            :src="list.scenePicUrl"
            alt=""
          >
          <div class="d">{{list.simpleDesc}}</div>
          <p>{{list.name}}</p>
          <span>￥{{list.retailPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchList',
  data () {
    return {
      value: '',
      isShowXq: false, // 控制是否显示价格的下拉
      isShowList: false, // 控制是否显示分类的下拉
      index: 0, // 默认全部不选中
      searchObj: {
        keyword: "",
        sortType: 0,
        descSorted: true,
        categoryId: 0,
        matchType: 0,
        floorPrice: -1,
        upperPrice: -1,
        size: 40,
        itemId: 0,
        stillSearch: false,
        searchWordSource: 8,
        needPopWindow: true,
        _stat_search: "hot"
      },
      dirlist: []
    }
  },
  methods: {
    onConfirm () { },
    noShow () {
      this.index = 1
      this.isShowList = false
      this.isShowXq = false
    },
    // 显示价格的下拉
    showXq () {
      this.isShowXq = !this.isShowXq
      this.isShowList = false
      this.index = 2
    },
    // 显示价格的下拉
    showList () {
      this.isShowList = !this.isShowList
      this.isShowXq = false
      this.index = 3
    },
    // 取消显示所有
    noShowEvery () {
      this.isShowList = false
      this.isShowXq = false
    },
    // 发送请求获取数据
    async getSearchList (searchObj) {
      var x = ''
      for (const key in searchObj) {
        x += key + '=' + searchObj[key] + '&'
      }
      await this.$store.dispatch('getsearchlist', x)
        .then(() => {
          this.dirlist = this.$store.state.searchlist.searchlist.directlyList
        })
    }
  },
  mounted () {
    // 获取传递过来的关键词
    this.value = this.$route.query.name
    this.searchObj.keyword = this.$route.query.name
    this.getSearchList(this.searchObj)
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.act
  color: #f00
.container
  position: absolute
  width: 100%
  height: 100%
  .top
    header
      position: relative
      display: flex
      align-items: center
      width: 100%
      background-color: #fff
      .sear
        width: 90%
    .content
      position: relative
      z-index: 3
      display: flex
      justify-content: space-evenly
      align-items: center
      margin-top: 0
      width: 100%
      height: 40px
      background-color: #fafafa
      .top
        padding: 20px
      .cen
        padding: 20px
        .xq
          position: absolute
          top: 30px
          left: 0
          width: 100%
          .top
            display: flex
            align-items: center
            padding: 15px 0
            width: 100%
            background-color: #fff
            .title
              width: 20%
              text-align: center
              line-height: 50px
            .right
              color: #888
              opacity: 0.8
              input
                margin: 1px 0 0 1px
                width: 120px
                text-align: center
          .xxd
            display: flex
            align-items: center
            margin: 0
            padding: 5px 0 10px 0
            width: 100%
            background-color: #fff
            .title
              width: 20%
              text-align: center
              line-height: 50px
            .desc, .dsc
              padding: 5px 15px
              border: 1px solid #ccc
              color: #888
            .dsc
              margin-left: 10px
          footer
            display: flex
            .ok
              color: #f00
      .right
        .list
          position: absolute
          top: 30px
          left: 0
          z-index: 5
          display: flex
          flex-wrap: wrap
          padding: 20px 25px 0
          width: 100%
          background-color: #fff
          div
            margin: 0 20px 20px 0
            padding: 5px
            border: 1px solid #888
            color: #333
    .mask
      position: fixed
      top: 0
      right: 0
      bottom: 0
      left: 0
      z-index: 2
      background: rgba(0, 0, 0, 0.5)
    .main
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      padding: 10px 5px
      width: 100%
      .desc
        margin-bottom: 20px
        width: 49%
        img
          width: 100%
        .d
          overflow: hidden
          margin-top: -2px
          width: 100%
          height: 20px
          background-color: #f1ece2
          color: #9f8a60
          text-overflow: ellipsis
          white-space: nowrap
          font-size: 14px
          line-height: 20px
        p
          padding: 10px 0 10px 0
          width: 100%
          line-height 20px
        span
          color: #f00
</style>
