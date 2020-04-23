const teachers = require("../../../db/teachers");

module.exports = (req, res) => {

  let data = req.body;

  /**增加数据 */
  teachers
  .create({
    teachername: data.teachername,
    teachersex: data.teachersex,
    teacherdesc: data.teacherdesc,
    teacherheadersrc: data.teacherheadersrc
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