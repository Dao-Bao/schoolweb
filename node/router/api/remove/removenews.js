const news = require("../../../db/news");

module.exports = (req, res) => {

  // console.log(req);

    //查找条件
    news
        .deleteMany({ newstitle: res.newstitle })
        .then((d) => {
            console.log(d);
            console.log(req.newstitle);
            console.log("删除成功");
        })
        .catch((e) => {
            console.log("删除失败");
            console.log(e);
        });
};