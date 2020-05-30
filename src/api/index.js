// 引入二次封装的axios文件
import ajax from './ajax'
// 获取导航栏的导航数据
export const reqNavList = () => ajax.get('/getNavList')
// 获取首页全部数据
export const reqHome = () => ajax.get('/getHome')