// 引入二次封装的axios文件
import ajax from "./ajax";
// 值得买接口
import Goodajax from "./ajaxGoodBuy";
// 搜索页面
import Searchajax from "./ajaxSearch";

// 获取导航栏的导航数据
export const reqNavList = () => ajax.get("/getNavList");
// 获取首页全部数据
export const reqHome = () => ajax.get("/getHome");
// 获取分类页面的全部数据
export const reqCateList = () => ajax.get("/getcategoryList");
// 获取值得买的数据
export const reqGoodBuy = () => Goodajax.get("/know/navWap.json");
// 获取值得买瀑布流的数据
export const reqGoodBuyMore = (page, size) =>
  Goodajax.get(`/find/recAuto.json?page=${page}&size=${size}`);
// 获取搜索界面初始化数据
export const reqSearchInit = () => Searchajax.post("/init.json");
// 搜索列表数据
export const reqSearchList = (searObj) =>
  Searchajax.get(`/search.json?${searObj}`);
// 实时搜索功能
export const reqSearchHot = (searchObj) =>
  Searchajax.post(`/searchAutoComplete.json`, searchObj);
