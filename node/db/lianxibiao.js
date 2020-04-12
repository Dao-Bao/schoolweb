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
  // xybgs: {type:String, require:true},
  // jwc: {type:String, require:true},
  // rsc: {type:String, require:true},
  // xcb: {type:String, require:true},
  // bwc: {type:String, require:true},
  // xsgzbgs: {type:String, require:true},
  // tw: {type:String, require:true},
  // xlzxzx: {type:String, require:true},
  // zbjycjy: {type:String, require:true},
  // zbjyczs: {type:String, require:true},
  // gjjlc: {type:String, require:true},
  // kyc: {type:String, require:true},
  // cwc: {type:String, require:true},
  // jjcyc: {type:String, require:true},
  // hqc: {type:String, require:true},
  // zcglzx: {type:String, require:true},
  // jcb: {type:String, require:true},
  // tyb: {type:String, require:true},
  // szb: {type:String, require:true},
  // tsg: {type:String, require:true},
  // xxgcxy: {type:String, require:true}
  bumen: {type:String, require:true},
  phone: {type:String, require:true}
});

/**建表 */
let lianxibiao = mongoose.model("lianxibiao", lxbSchema);
module.exports = lianxibiao;