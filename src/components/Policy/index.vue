<template>
  <div class="policy">
    <ul class="grow">
      <li
        class="item"
        v-for="policy in homeList.policyDescList"
        :key="policy.desc"
      >
        <i :style="`background-image: url(${policy.icon})`"></i>
        <span>{{policy.desc}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Policy',
  props: ['homeList']
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.policy
  margin: 0 auto
  width: 90%
  .grow
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    height: 40px
    li
      display: flex
      justify-content: space-evenly
      align-items: center
      width: 33.3333333%
      i
        display: inline-block
        width: 20px
        height: 20px
        background-size: 100% 100%
      span
        font-size: 12px
</style>
