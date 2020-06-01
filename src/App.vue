<template>
  <div id="app">
    <Header v-if="!$route.meta.isShowHeader" />
    <router-view></router-view>
    <Footer v-if="$route.meta.isShowFooter" />
  </div>
</template>

<script>
// 引入Home组件
// 引入Header组件
import Header from './components/Header'
// 引入Footer组件
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="stylus">
#app
  margin-right: auto
  margin-left: auto
  width: 100%
  height 100%
  background-color: #eeeeee
</style>
