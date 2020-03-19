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
      console.log("校园oa用户上传接口连接成功...");
    }
  )
  .catch(
    (e)=> {
      // console.log(e);
      console.log("校园oa用户上传上传接口连接失败!");
    }
  );

/**用Schema来建表 */
let Schema = mongoose.Schema;

/**表规则 */
let userSchema = new Schema({
  /**news表规则 */
  username: {type:Number, require:true},
  userpassword: {type:String, require:true}
});

/**建表 */
let user = mongoose.model("user", userSchema);
module.exports = user;