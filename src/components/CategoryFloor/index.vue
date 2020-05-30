<template>
  <!-- 类目热销榜 -->
  <div class="categoryFloor">
    <div class="title">
      <h2>类目热销榜</h2>
    </div>
    <div class="content">
      <div
        class="line1"
        v-if="homeList.categoryHotSellModule"
      >
        <div
          class="left"
          v-for="(val,index) in homeList.categoryHotSellModule.categoryList"
          :key="index"
        >
          <p>{{val.categoryName}}</p>
          <img
            :src="val.picUrl"
            alt=""
          >
        </div>
      </div>
      <div
        class="line2"
        v-if="homeList.categoryHotSellModule"
      >
        <div
          class="item"
          v-for="(val,index) in homeList.categoryHotSellModule.list"
          :key="index"
        >
          <div class="name">{{val.categoryName}}</div>
          <img
            :src="val.picUrl"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryFloor',
  props: ['homeList']
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.categoryFloor
  margin-top: 10px
  padding: 0 10px 10px
  width: 100%
  background-color: #fff
  .title
    width: 100%
    h2
      padding: 20px 0 20px 0
      color: #888
      font-size: 18px
  .content
    width: 100%
    .line1
      display: flex
      justify-content: space-between
      width: 100%
      .left
        position: relative
        box-sizing: border-box
        width: 49.5%
        height: 110px
        background-color: #f9f3e4
        &:nth-child(2)
          background-color: #ebeff6
        p
          position: relative
          padding: 45px 0 0 10px
          font-size: 17px
          &::after
            position: absolute
            bottom: -20%
            left: 11px
            width: 30px
            height: 3px
            background-color: #000
            content: ''
        img
          position: absolute
          top: 2%
          right: -5%
          width: 110px
          height: 110px
    .line2
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      width: 100%
      height: 200px
      .item
        display: flex
        flex-direction: column
        justify-content: space-around
        align-items: center
        margin-top: 5px
        width: 24%
        background-color: #f5f5f5
        .name
          padding-top: 10px
          font-size: 12px
        img
          width: 60px
          height: 60px
</style>
