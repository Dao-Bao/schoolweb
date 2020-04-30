// const multer = require("multer");
const path = require("path");
const fs = require("fs");
const download = require("node-download-file");
const url = require("url");
const regulations = require("../../../db/regulations");

module.exports = (req, res) => {

  let reqData = req.body;
  // console.log("++++++");
  // console.log(reqData);
  // console.log(reqData.regulationsname);
  // console.log("++++++");

  regulations
  // .find(
  //   { 
  //     regulationsname: reqData.regulationsname,
  //     // regulationsUrl: reqData.regulationsUrl
  //   }
  // )
  .findOne({})
  .then((data) => {

      console.log(data);
      // console.log("*******");
      // console.log(reqData.regulationsUrl);
      // console.log(JSON.stringify(reqData.regulationsUrl));
      // let a = url.resolve("host//Users//Lenovo//Desktop//schoolweb//node//public//documents");
      // console.log(a);
      // console.log("*******");


      // let buff = JSON.stringify(reqData.regulationsUrl);
      // console.log("&&&&&&");
      // console.log(buff);
      // console.log("&&&&&&");

      // download.File(buff,"./",null)
      // .then((result) => {
      //   if (result == 200) {
      //     console.log("下载完成");
      //   }
      // })

      /**第一种方式，直接调用download方法 */
      // let road = JSON.stringify(data.regulationsUrl);
      // console.log(reqData.regulationsUrl);
      // data.regulationsUrl = reqData.regulationsUrl;
      // console.log(data.regulationsUrl);
      let road = data.regulationsUrl;
      res.download(road);

      /**第二种方式*/
      // let road = fs.createReadStream(reqData.regulationsUrl); //创建输入流入口
      // console.log("+++");
      // const buff = JSON.stringify(data.regulationsUrl);
      // console.log(buff);
      // const buf = Buffer.from(JSON.stringify(reqData.regulationsUrl));
      // let road = fs.createReadStream(buff); //创建输入流入口
      // res.writeHead(200, {
      //   'Content-Type': 'application/force-download',
      //   'Content-Disposition': 'attachment; filename=name'
      // });
      // load.pipe(res); //通过管道方式写入
    }
  )
  .catch(
    (e) => {
      console.log(e);
      res.send(e);
    }
  );
};