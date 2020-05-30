<template>
  <div class="container">
    <van-tabbar
      v-model="active"
      active-color="#f00"
      inactive-color="#ccc"
    >
      <router-link to="/" class="van-tabbar-item">
        <van-tabbar-item icon="home-o">
          首页
        </van-tabbar-item>
      </router-link>
      <router-link to="/classify" class="van-tabbar-item">
        <van-tabbar-item icon="send-gift-o">
          分类
        </van-tabbar-item>
      </router-link>

      <router-link to="/goodbuy" class="van-tabbar-item">
        <van-tabbar-item icon="coupon-o">
          值得买
        </van-tabbar-item>
      </router-link>
      <van-tabbar-item
        icon="cart-o"
        badge="99"
      >购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

  data () {
    return {
      active: 0
    }
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
  position: fixed
  bottom: 0px
  width: 100%
  height: 98px
</style>
