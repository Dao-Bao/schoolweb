const cultures = require("../../../db/schoolculture");

module.exports = (req, res) => {

    //查找条件
    cultures
        .deleteOne({})
        .then((data) => {
            // console.log("删除成功");
        })
        .catch((e) => {
            // console.log("删除失败");
            console.log(e);
        });
};