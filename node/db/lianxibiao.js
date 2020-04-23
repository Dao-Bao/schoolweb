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
    }
  )
  .catch(
    (e)=> {
      console.log(e);
    }
  );

/**用Schema来建表 */
let Schema = mongoose.Schema;

/**表规则 */
let lxbSchema = new Schema({
  /**news表规则 */
  bumen: {type:String, require:true},
  phone: {type:String, require:true}
});

/**建表 */
let lianxibiao = mongoose.model("lianxibiao", lxbSchema);
module.exports = lianxibiao;