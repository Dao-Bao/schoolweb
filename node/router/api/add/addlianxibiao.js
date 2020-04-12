const lianxibiao = require("../../../db/lianxibiao");

module.exports = (req, res) => {

  let data = req.body;
  // console.log(data);

  /**增加数据 */
  lianxibiao
  .create({
    // xybgs: data.xybgs,
    // jwc: data.jwc,
    // rsc: data.rsc,
    // xcb: data.xcb,
    // bwc: data.bwc,
    // xsgzbgs: data.xsgzbgs,
    // tw: data.tw,
    // xlzxzx: data.xlzxzx,
    // zbjycjy: data.zbjycjy,
    // zbjyczs: data.zbjyczs,
    // gjjlc: data.gjjlc,
    // kyc: data.kyc,
    // cwc: data.cwc,
    // jjcyc: data.jjcyc,
    // hqc: data.hqc,
    // zcglzx: data.zcgglzx,
    // jcb: data.jcb,
    // tyb: data.tyb,
    // szb: data.szb,
    // tsg: data.tsg,
    // xxgcxy: data.xxgcxy
    bumen: data.bumen,
    phone: data.phone
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