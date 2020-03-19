const news = require("../db/teachers");

module.exports = (req, res) => {

  let data = req.body;
  // console.log(data);

  /**增加数据 */
  news
  .create({
    teachername: data.teachername,
    teachersex: data.teachersex,
    teacherdesc: data.teacherdesc,
  })
  .then(
    (data) => {
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
    }
  );
};