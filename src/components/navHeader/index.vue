<template>
  <van-nav-bar title="网易严选">
    <template #left>
      <van-icon
        name="wap-home-o"
        size="30"
        color="#000"
        @click="goHome"
      />
    </template>
    <template #right>
      <van-icon
        name="search"
        size="30"
        color="#000"
        @click="$router.push('/search')"
      />
      <van-icon
        name="shopping-cart-o"
        size="30"
        color="#000"
      />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'navHeader',
  methods: {
    goHome () {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.van-nav-bar__title
  font-size: 20px
.van-icon-shopping-cart-o
  margin-left: 15px
</style>
