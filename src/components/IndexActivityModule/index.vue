<template>
  <div class="newPerson">
    <div class="title">
      <span>新人专享礼</span>
    </div>
    <div
      class="content"
      v-if="homeList.indexActivityModule"
    >
      <div class="left">
        <span>{{homeList.indexActivityModule[0].title}}</span>
        <img
          :src="homeList.indexActivityModule[0].picUrl"
          alt=""
        >
      </div>
      <div class="right">
        <div class="top">
          <p class="top-1">{{homeList.indexActivityModule[1].title}}</p>
          <p class="top-2">{{homeList.indexActivityModule[1].subTitle}}</p>
          <img
            :src="homeList.indexActivityModule[1].picUrl"
            alt=""
          >
          <div class="toto">
            <span>{{homeList.indexActivityModule[1].activityPrice}}</span>
            <del>{{homeList.indexActivityModule[1].originPrice}}</del>
          </div>
        </div>
        <div class="bottom">
          <p class="p-top">{{homeList.indexActivityModule[2].title}}</p>
          <p class="p-bottom">{{homeList.indexActivityModule[2].subTitle}}</p>
          <img
            :src="homeList.indexActivityModule[2].picUrl"
            alt=""
          >
          <div class="toto">
            <p>{{homeList.indexActivityModule[2].activityPrice}}</p>
            <del>{{homeList.indexActivityModule[2].originPrice}}</del>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexActivityModule',
  // 接收父级组件传递数据
  props: ['homeList']
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.newPerson
  margin: 0 auto
  width: 95%
  .title
    position: relative
    width: 100%
    height: 45px
    color: #888
    text-align: center
    font-size: 18px
    line-height: 45px
    &:after
      position: absolute
      top: 50%
      left: 28%
      margin-top: -3px
      width: 20px
      height: 2px
      background-color: #888
      content: ''
    &:before
      position: absolute
      top: 50%
      right: 28%
      margin-top: -3px
      width: 20px
      height: 2px
      background-color: #888
      content: ''
  .content
    display: flex
    justify-content: space-between
    width: 100%
    height: 280px
    .left
      width: 49.5%
      height: 100%
      background-color: #f9e9cf
      span
        display: inline-block
        padding: 25px 0 0 20px
        font-size: 20px
      img
        display: block
        margin: 50px auto 0
        width: 90%
    .right
      display: flex
      flex-direction: column
      justify-content: space-between
      width: 49.5%
      height: 100%
      .top
        position: relative
        width: 100%
        height: 49.5%
        background-color: #fbe2d3
        .top-1
          padding: 20px 0 0 20px
          font-size: 20px
        .top-2
          padding: 10px 0 0 18px
          color: #888
        img
          position: absolute
          top: 12%
          right: -10%
          width: 120px
        .toto
          position: absolute
          top: 8%
          right: 3%
          width: 50px
          height: 50px
          border-radius: 50%
          background-color: #f4a447
          color: #fff
          opacity: 0.8
          span
            display: inline-block
            padding: 12px 0 0px 12px
            font-size: 16px
          del
            padding-left: 17px
            font-size: 10px
      .bottom
        position: relative
        width: 100%
        height: 49.5%
        background-color: #ffecc2
        .p-top
          padding: 20px 0 0 20px
          font-size: 20px
        .p-bottom
          margin: 5px 0 0 17px
          width: 82px
          height: 22px
          background-color: rgba(0, 0, 0, 0.2)
          color: #fff
          text-align: center
          font-size: 14px
          line-height: 22px
        img
          position: absolute
          top: 15%
          right: -8%
          width: 120px
          height: 120px
        .toto
          position: absolute
          top: 10%
          right: 3%
          width: 50px
          height: 50px
          border-radius: 50%
          background-color: #f4a447
          color: #fff
          opacity: 0.8
          p
            padding: 10px 0 0px 17px
            font-size: 16px
          del
            padding-left: 16px
            font-size: 10px
</style>
