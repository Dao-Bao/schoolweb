const lianxibiao = require("../../../db/lianxibiao");

module.exports = (req, res) => {

    //查找条件
    lianxibiao
        .deleteOne({})
        .then((data) => {
            // console.log("删除成功");
        })
        .catch((e) => {
            // console.log("删除失败");
            console.log(e);
        });
};