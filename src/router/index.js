import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入routers
import routes from './routes'

// 声明使用路由
Vue.use(VueRouter)
// 实例化路由器对象, 并暴露出去
export default new VueRouter({
  mode: 'history',
  routes
})