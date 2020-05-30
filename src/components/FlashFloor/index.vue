<template>
  <!-- 限时购 -->
  <div class="flashFloor">
    <div class="title">
      <div class="left">
        <h2>限时购</h2>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <a href="">更多 ></a>
    </div>
    <div
      class="content"
      v-if="homeList.flashSaleModule"
    >
      <a
        class="item"
        v-for="(val,index) in homeList.flashSaleModule.itemList"
        :key="index"
      >
        <img
          :src="val.picUrl"
          alt=""
        >
        <div class="item-p">
          <span class="item-p2">{{val.activityPrice}}</span>
          <del>{{val.originPrice}}</del>
        </div>

      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flashFloor',
  data () {
    return {
      time: 60 * 60 * 60 * 1000,
    }
  },
  props: ['homeList']
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.flashFloor
  display: flex
  flex-direction: column
  margin-top: 10px
  padding: 0 10px
  width: 100%
  background-color: #fff
  .title
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    .left
      display: flex
      align-items: center
      padding: 20px 0 20px 0
      h2
        color: #888
        font-size: 18px
      .colon
        display: inline-block
        margin-left: 3px
        color: #000
      .block
        display: inline-block
        margin-left: 5px
        width: 20px
        border-radius: 5px
        background-color: #000
        color: #fff
        text-align: center
        font-size: 12px
    a
      color: #222
  .content
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    width: 100%
    height: 300px
    .item
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center
      width: 31%
      height: 130px
      img
        width: 110px
        height: 110px
        background-color: #f5f5f5
      .item-p
        .item-p2
          margin-left: -20px
          color: #f00
        del
          margin-left: 10px
          color: #888
</style>
