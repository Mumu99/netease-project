import Vue from 'vue'
import App from './App.vue'
// 引入swiper
// import style
import 'swiper/css/swiper.css'
// 引入路由
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
Vue.use(VueRouter)
// 引入接口函数
import * as API from './api'
// 保证的任意的一个组件实例都可以直接访问相关的接口函数
Vue.prototype.$API = API
// 引入vant
import {
  Button,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Icon,
  Sticky,
  CountDown,
  List,
  Cell,
  Sidebar,
  SidebarItem,
  NavBar,
  Toast
} from 'vant'
Vue.use(Button).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Icon).use(Sticky).use(CountDown).use(List).use(Cell).use(Sidebar).use(SidebarItem).use(NavBar).use(Toast)
import './style/reset.css'

Vue.config.productionTip = false

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')