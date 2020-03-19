const news = require("../db/regulations");

module.exports = (req, res) => {

  let data = req.body;
  // console.log(data);

  /**增加数据 */
  news
  .create({
    regulationstitle: data.regulationstitle,
    regulationsurl: data.regulationsurl,
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