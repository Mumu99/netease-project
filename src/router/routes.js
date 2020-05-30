// 引入组件, 组成路由组件

// 引入首页
import Home from '@/pages/Home'
// 分类
import Classify from '@/pages/Classify'
// 值得买
import GoodBuy from '@/pages/GoodBuy'

export default [
  // 首页路由
  {
    path: '/',
    component: Home,
    meta: {
      isShowHeader: false // 是否隐藏Footer组件
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShowHeader: true // 是否隐藏Footer组件
    }
  },
  {
    path: '/goodbuy',
    component: GoodBuy,
    meta: {
      isShowHeader: true // 是否隐藏Footer组件
    }
  }
]