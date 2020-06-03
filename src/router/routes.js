// 引入组件, 组成路由组件

// 引入首页
import Home from '@/pages/Home'
// 分类
import Classify from '@/pages/Classify'
// 值得买
import GoodBuy from '@/pages/GoodBuy'
// 居家生活
import Familylife from '@/pages/Familylife'
// 引入cate组件
import cate from '@/pages/Classify/cate'
// 引入desc
import desc from '@/pages/desc'
// 引入search组件
import search from '@/pages/Search'
// 引入searchlist
import SearchList from '@/pages/SearchList'

export default [
  // 首页路由
  {
    path: '/',
    component: Home,
    meta: {
      isShowHeader: false, // 是否隐藏Header组件
      isShowFooter: true
    }
  },
  // 搜索
  {
    path: '/search',
    component: search,
    meta: {
      isShowHeader: true, // 是否隐藏Header组件
      isShowFooter: false
    }
  },
  // 搜索详细列表
  {
    path: '/searchlist',
    component: SearchList,
    meta: {
      isShowHeader: true, // 是否隐藏Header组件
      isShowFooter: false
    }
  },
  // 分类
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShowHeader: true, // 是否隐藏Header组件
      isShowFooter: true
    },
    children: [
      // 子路由
      {
        path: '/classify/cate',
        component: cate,
        meta: {
          isShowHeader: true, // 是否隐藏Header组件
          isShowFooter: true
        }
      }
    ]
  },
  // 值得买
  {
    path: '/goodbuy',
    component: GoodBuy,
    meta: {
      isShowHeader: true, // 是否隐藏Header组件
      isShowFooter: true
    }
  },
  // 居家
  {
    path: '/familylife',
    component: Familylife,
    meta: {
      isShowHeader: false, // 是否隐藏Header组件
      isShowFooter: true
    }
  },
  // 详情
  {
    path: '/desc',
    component: desc,
    meta: {
      isShowHeader: true, // 是否隐藏Header组件
      isShowFooter: false
    }
  }
]