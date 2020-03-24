const multer = require("multer");
const path = require("path");

//定义磁盘储存引擎
let storage = multer.diskStorage({

  //储存的目录
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/documents"));
    console.log(path.parse(file.originalname));
  },

  //文件名
  filename: function (req, file, cb) {
    let {axt} = path.parse(file.originalname);  //匹配后缀名
    // cb(null, file.fieldname + '-' + Date.now())
    cb(null, req.id + axt);  //使用id
  }
})

//定义上传函数
let upload = multer({

  //文件存储地址
  // dest: path.join(__dirname, "../public/documents"),
  storage: storage,

  //上传格式限制
  fileFilter(req, file, cb) {
    let {axt} = path.parse(file.originalname);  //匹配后缀名
    cb(null,/^\.doc|\.docx|\.xlsx|\.xls|\.pdf$/.test(axt));  //正则检测文件格式
    // console.log(path.parse(file.originalname));
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
    res.send({"code": "0"});
    console.log();
  })
};