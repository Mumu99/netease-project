<template>
  <!-- 底部 -->
  <footer>
    <header>
      <a href="">下载APP</a>
      <a href="">电脑版</a>
    </header>
    <footer>
      <p>网易公司版权所有 © 1997-<span>2020</span></p>
      <p>食品经营许可证：JY13301080111719</p>
    </footer>
  </footer>
</template>

<script>
export default {
  name: 'HomeList',
  props: ['homeList']
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
footer
  padding: 20px 30px 10px
  width: 100%
  background-color: #414141
  header
    display: flex
    justify-content: space-evenly
    width: 100%
    a
      display: inline-block
      width: 110px
      height: 35px
      border: 1px solid #6a6a6a
      border-radius: 2px
      color: #fff
      text-align: center
      line-height: 35px
  footer
    color: #6a6a6a
    font-size: 14px
    p
      margin-top: 5px
      text-align: center
</style>
