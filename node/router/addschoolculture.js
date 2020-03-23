const schoolculture = require("../db/schoolculture");

module.exports = (req, res) => {

  let data = req.body;
  // console.log(data);

  /**增加数据 */
  schoolculture
  .create({
    schoolcultureimgsrc: data.schoolcultureimgsrc,
    schoolculturedesc: data.schoolculturedesc,
  })
  .then(
    (data) => {
      res.send({
        code: 0,
        message: "提交成功"
      });
      console.log(data);
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