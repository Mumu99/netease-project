<template>
  <div
    class="kingkongCarousel"
    v-if="homeList.kingKongModule"
  >
    <a
      :href="king.schemeUrl"
      v-for="king in homeList.kingKongModule.kingKongList"
      :key="king.text"
    >
      <div class="icon">
        <img
          :src="king.picUrl"
          alt=""
        >
      </div>
      <span>{{king.text}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'KingkongCarousel',
  props: ['homeList']
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.kingkongCarousel
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  margin: 0 auto
  width: 95%
  a
    display: flex
    flex-direction: column
    justify-content: space-evenly
    align-items: center
    width: 20%
    height: 100px
    .icon
      width: 80%
      height: 55%
    img
      width: 100%
      height: 100%
</style>
