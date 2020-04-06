/**引入mongooseDB数据库 */
const mongoose = require("mongoose");


/**连接数据库 */
mongoose
  .connect(
    "mongodb://localhost:27017/school", { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(
    (d) => {
      // console.log(d);
      console.log("师资力量上传接口连接成功...");
    }
  )
  .catch(
    (e)=> {
      // console.log(e);
      console.log("师资力量上传接口连接失败!");
    }
  );

/**用Schema来建表 */
let Schema = mongoose.Schema;

/**表规则 */
let teachersSchema = new Schema({
  /**teachers表规则 */
  teachername: {type:String, require:true},
  teachersex: {type:String, require:true},
  teacherdesc: {type:String, require:true},
  teacherheadersrc: {type:String, require:true}
});

/**建表 */
let teachers = mongoose.model("teachers", teachersSchema);
module.exports = teachers;