const user = require("../../../db/schooloauser");
// const crypto = require("crypto");

module.exports = (req, res) => {
    //得到前端传过来的数据
    let reqData = req.body;

    // console.log(reqData);
    user
        .findOne({username: reqData.username}) //检测数据库中有没有该用户
        .then(data=>{   
            if(data){//user注册过进行密码比对

                if(data.userpassword == reqData.userpassword && data.useridentity == "管理员"){                    
                    res.send({code:0, msg: "管理员登陆成功"})
                }else if(data.userpassword == reqData.userpassword) {
                    res.send({code:1,msg:"普通用户登陆成功"});
                }else {
                    res.send({code:2, msg: "密码错误"})
                }
            }else{
                res.send({code:3,msg:"用户未注册"});
                }
            }
        )
        .catch((e)=>{
            res.send({code:3,msg:"服务器异常"})
        })
};