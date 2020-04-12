const multer = require("multer");
const path = require("path");
const regulations = require("../../../db/regulations"); /**引入数据库规则 */


//定义磁盘储存引擎
let storage = multer.diskStorage({

  //储存的目录
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../../public/documents"));
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
  storage: storage,

  //上传格式限制
  fileFilter(req, file, cb) {
    let {ext} = path.parse(file.originalname);  //匹配后缀名
    cb(null,/^\.doc|\ .docx|\.xlsx|\.xls|\.pdf$/.test(ext));  //正则检测文件格式
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
    regulations
    .create({
      regulationsname: req.file.filename,
      regulationsUrl: req.file.path
    })
    .then( () => {
      // console.log(req.file);
        res.send({
          code: 0,
          message: "提交成功"
        });
      }
    )
    .catch((e) => {
        console.log(e);
        res.send({
          code: 1,
          message: "提交失败"
        });
      })

    // console.log(req.file.filename);  //文件名
    // console.log(req.file.path);      //文件存放路径
    // res.send({"code": "0"});
    // console.log();
  })
};