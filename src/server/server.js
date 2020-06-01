// 引入express
const express = require("express");
// 创建APP应用对象：APP包含express框架核心功能
const app = express();

app.use(express.json());
// 处理请求的功能 - 路由
app.get("/getNavList", (request, response) => {
  /*
    request 请求对象
    response 响应对象
  */
  var data = require('./models/indexCateModule')
  response.json({
    code: 200,
    data
  })
});

// index的全部数据
app.get('/getHome', (request, response) => {
  var data = require('./models/index')
  response.json({
    code: 200,
    data
  })
})

// 分类的全部数据
app.get('/getcategoryList', (request, response) => {
  var data = require('./models/cateLists')
  response.json({
    code: 200,
    data
  })
})

// 监听端口号，启动服务
app.listen(8000, "localhost", (err) => {
  if (err) {
    console.log("服务器启动失败:", err);
    return;
  }

  console.log("服务器启动成功，请访问：http://localhost:8000");
});