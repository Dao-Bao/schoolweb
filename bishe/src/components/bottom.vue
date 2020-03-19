<template>
    <el-footer class="elfooter">
        <div class="all">
            <div class="top">
                    <div class="left">
                        <img src="@/assets/flogo.jpg" />
                    </div>
                    <div class="center">
                        <div class="center_left">
                            <span class="textf">合作方专题</span><br>
                            <span class="texts">北京科技大学</span><br>
                            <span class="texts">广东珠江投资有限公司</span>
                        </div>
                        <div></div>
                        <div></div>
                        <div class="center_right">
                            <span class="textf">联系我们</span><br>
                            <span class="texts">地址：天津市宝坻区京津新城珠江北环东路1号</span><br>
                            <span class="texts">招办联系电话：022-22410969 022-22410960</span><br>
                            <span class="texts">院长信箱：ustbtjxy@ustb.edu.cn</span><br>
                            <span class="texts">邮编：301830</span><br>
                        </div>
                    </div>
                    <div class="right">
                        <div class="vx">
                            <img src="@/assets/wxgzh.jpg" class="ewm"><br><br>
                            <div class="textt">微信公众号</div>
                        </div>
                        
                    </div>
            </div>
        </div>
    </el-footer>
</template>

<style>
.el-footer {
    margin: 0;
    padding: 0;
    /* width: 100%; */
    height: 100%;
    background-color: #413f40;
}
.all {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-color: #413f40;
}
.top {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #413f40;
}
.left {
    /* flex-basis: auto; */
    flex-grow: 1;
    margin: 0 auto;
}
.center {
    flex-grow: 1;
    margin: 20px;
}
.center_left {
    float: left; 
    margin-right: 20px;      
}
.center_right {
    float: left;
}
.textf {
    color: #FFF;
    font-size: 15px;
}
.texts {
    font-size: 10px;
    color: #ffffff;
}
.right {
    /* flex-basis: auto; */
    flex-grow: 1;
    margin: 0 auto;
}
.vx {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background-color: #ffffff;
} 
.textt {
    font-size: 10px;
    color: #ffffff;
    text-align: center;
}
.ewm {
    width: 70px;
    height: 70px;
    margin-left: 5%;
    margin-top: 5%;
}
</style>