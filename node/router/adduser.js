const user = require("../db/schooloauser");

module.exports = (req, res) => {
    //得到前端传过来的数据
    let reqData = req.body;
    user
        .findOne({username:reqData.username}) //检测数据库中有没有该用户
        .then(data=>{
            if(data){
                res.send({code:1,msg:"用户名存在"});
            }else{
                    user
                        .create({
                          username: reqData.username,
                          userpassword: reqData.userpassword,
                        })
                        .then((data)=>{
                            //设置session
                            req.session.ifLogin = true;
                            req.session._id = data._id;
                            res.send({code:0,msg:"注册成功"})
                        })
                        .catch((err)=>{
                            res.send({code:2,msg:"注册失败"})
                        })
            }
        })
        .catch(e=>{
            res.send({code:2,msg:"服务器异常"})
        })
};