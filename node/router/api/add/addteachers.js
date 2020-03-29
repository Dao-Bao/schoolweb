const teachers = require("../../../db/teachers");

module.exports = (req, res) => {

  /**增加数据 */
  teachers
  .create({
    teachername: req.teachername,
    teachersex: req.teachersex,
    teacherdesc: req.teacherdesc,
    teacherheadersrc: req.teacherheadersrc
  })
  .then(
    (data) => {
      res.send({
        code: 0,
        message: "提交成功"
      });
      console.log(data)
    }
  )
  .catch(
    (e) => {
      console.log(e);
      res.send({
        code: 1,
        message: "提交失败"
      });
    });
  // })
}