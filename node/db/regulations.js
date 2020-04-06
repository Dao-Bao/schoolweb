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
      console.log("通知上传接口连接成功...");
    }
  )
  .catch(
    (e)=> {
      // console.log(e);
      console.log("通知上传接口连接失败!");
    }
  );

/**用Schema来建表 */
let Schema = mongoose.Schema;

/**表规则 */
let regulationsSchema = new Schema({
  /**regulations表规则 */
  regulationsname: {type:String, require:true},
  // base64: {type:String, require:true}
  regulationsUrl: {type:String, require: true}
});

/**建表 */
let regulations = mongoose.model("regulations", regulationsSchema);
module.exports = regulations;