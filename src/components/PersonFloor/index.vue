<template>
  <!-- 人气推荐 -->
  <div class="personFloor">
    <div class="title">
      <h2>人气推荐</h2>
      <a href="">更多 ></a>
    </div>
    <a class="top">
      <img
        src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png"
        alt=""
        style="background-image:url(//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png);opacity:0.8"
      >
      <div class="right">
        <p class="right-p1">15分钟快速救脸，射频多功能美容仪</p>
        <p class="right-p2">掌心里的“美容院”</p>
        <p class="right-p3">￥899</p>
      </div>
    </a>
    <div class="bottom">
      <a class="item">
        <img
          src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
          alt=""
        >
        <p class="item-p1">【抢购】一次性医用口罩 100支, 快速抢购</p>
        <p class="item-p2">￥60</p>
        <div class="tj">特价</div>
      </a>
      <a class="item">
        <img
          src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
          alt=""
          style="margin-left:5px"
        >
        <p class="item-p1">【抢购】一次性医用口罩 100支, 快速抢购</p>
        <p class="item-p2">￥60</p>
      </a>
      <a class="item">
        <img
          src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?type=webp&imageView&quality=65&thumbnail=330x330"
          alt=""
          style="margin-left:10px"
        >
        <p class="item-p1">【抢购】一次性医用口罩 100支, 快速抢购</p>
        <p class="item-p2">￥60</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonFloor',
  props: ['homeList']
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.personFloor
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
    h2
      padding: 20px 0 20px 0
      color: #888
      font-size: 18px
    a
      color: #222
  .top
    display: flex
    align-items: center
    width: 100%
    background-color: #fef0df
    img
      width: 150px
      height: 150px
    .right
      .right-p1
        overflow: hidden
        width: 200px
        text-overflow: ellipsis
        white-space: nowrap
      .right-p2
        margin: 5px 0
        color: #888
        font-size: 14px
      .right-p3
        color: #f00
  .bottom
    display: flex
    justify-content: space-between
    margin-top: 10px
    width: 100%
    .item
      display: flex
      flex-direction: column
      margin-bottom: 20px
      width: 49%
      img
        width: 110px
        height: 110px
        background-color: #f5f5f5
      .item-p1
        display: -webkit-box
        overflow: hidden
        margin: 5px 0
        width: 110px
        text-align: left
        text-overflow: ellipsis
        font-size: 14px
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
      .item-p2
        color: #f00
      .tj
        margin: 5px 0 0
        width: 30px
        height: 15px
        border: 1px solid #f00
        border-radius: 10px
        color: #f00
        text-align: center
        font-size: 12px
</style>
