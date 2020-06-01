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
  {
    path: '/goodbuy',
    component: GoodBuy,
    meta: {
      isShowHeader: true, // 是否隐藏Header组件
      isShowFooter: true
    }
  },
  {
    path: '/familylife',
    component: Familylife,
    meta: {
      isShowHeader: false, // 是否隐藏Header组件
      isShowFooter: true
    }
  },
  {
    path: '/desc',
    component: desc,
    meta: {
      isShowHeader: true, // 是否隐藏Header组件
      isShowFooter: false
    }
  }
]