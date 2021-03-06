const multer = require("multer");
const path = require("path");
const teachers = require("../../../db/teachers"); /**引入数据库规则 */


//定义磁盘储存引擎
let storage = multer.diskStorage({

  //储存的目录
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/teachersheader"));
    // console.log(path.parse(file.originalname));
  },

  //文件名
  filename: function (req, file, cb) {
    let {ext} = path.parse(file.originalname);  //匹配后缀名
    cb(null, path.parse(file.originalname).name + ext );
  }
})

//定义上传函数
let upload = multer({

  //文件存储地址
  // dest: path.join(__dirname, "../public/documents"),
  storage: storage,

  //上传格式限制
  fileFilter(req, file, cb) {
    let {ext} = path.parse(file.originalname);  //匹配后缀名
    cb(null,/^\.jpg|\ .png$/.test(ext));  //正则检测文件格式
    // console.log(file);
    // console.log(path.parse(file.originalname));
    // console.log((path.parse(file.originalname).name));
    // console.log(destination.__dirname);
  },

  //限制数据大小
  limits: {
    fileSize: 1024*1024*8
  }
}).single("file");

module.exports = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // 发生错误
    } else if (err) {
      // 发生错误
    }

    // 一切都好


    /** 
    teachers
      .create({
        // teacherheadersrc: req.file.path
      })
      .then( () => {
        // console.log(req.file);
        console.log(req.file.path);
        // console.log(teacherheadersrc);
          res.send({
            code: 0,
            message: "提交成功"
          });
        }
      )
      .catch(
        (e) => {
          console.log(e);
          res.send({
            code: 1,
            message: "提交失败"
          });
        })
        */

    console.log(res);  //文件名
    // console.log(req.file.path);      //文件存放路径
    // res.send({"code": "0"});
    // console.log("sdfsdf");
  })
};