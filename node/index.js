const express = require("express");  /**引入express框架 */
const path = require("path");
// const session = require("express-session");
// const mongoSession = require("connect-mongo");
const http = require("http");/**引入http模块 */
const cors = require("cors");

// const router = express.Router();
// const upload = require("./db/upload");


let app = express();   

const server = http.createServer((req, res) => {
  console.log("服务器接收到了请求" + req.url);

  /**添加响应头 */
  res.setHeader("Access-Control-Allow-Origin", "*");

  /**获取请求路径 */
  var pathname = url.parse(req.url).pathname;
  var query = url.parse(req.url, true).query;

      /**关闭nodejs 默认访问 favicon.ico */ 
      if (!pathname.indexOf('/favicon.ico')) {
        return; 
      };

      /**路由器处理*/
      route(handle, pathname, query, res);
});


app.listen(8990, () => { console.log("服务器启动...") });  /**监听6666端口 */

/**中间件 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"./static")));
app.use(cors()); /**解决跨域 */
//session中间件
// app.use(session({
//   secret:"bs", //密匙可以设置任何字符串
//   cookie:{maxAge:24*60*60*1000},//设置cookie的过期时间ms
//   rolling: true,//是否每次请求，都重新刷新存储时间
//   resave: false,//重新存储session
//   saveUninitialized: false,//初始值
  // store: new mongoSession({
  //     url:"mongodb://localhost:27017/school"
  // }),//不设置
// }));


/**路由监听 */
app.post("/addnews",require("./router/api/add/addnews"));/**上传新闻接口 */
app.post("/addteachers", require("./router/api/add/addteachers"));/**上传师资力量接口 */
app.post("/uploadteachersheader", require("./router/api/add/uploadteachersheader")); /**上传教师照片接口 */
app.post("/addregulations", require("./router/api/add/addregulations")); /**上传通知接口 */
app.post("/addschoolculture", require("./router/api/add/addschoolculture"));/**上传校园文化接口 */
app.post("/adduser", require("./router/api/add/adduser"));/**新增校园oa用户 */
app.post("/login", require('./router/api/add/login')); /** 登陆验证 */
app.post("/upload", require('./router/api/add/upload'));  /**上传接口 */

app.get("/findnews", require('./router/api/find/findnews')); /** 发送学院新闻接口 */
app.get("/findregulations", require('./router/api/find/findregulations')); /** 发送学院通知接口 */
app.get("/findschoolculture", require('./router/api/find/findschoolculture')); /** 发送学院文化接口 */
app.get("/findteachers", require('./router/api/find/findteachers')); /** 师资力量发送接口 */

app.get("/removenews", require('./router/api/remove/removenews')); /**删除news接口 */
app.get("/removeregulations", require('./router/api/remove/removeregulations')); /**删除regulations接口 */
app.get("/removecultures", require('./router/api/remove/removecultures')); /**删除cultures接口 */
// app.get("/removeteachers", require('./router/api/removeteachers')); /**删除teachers接口 */

