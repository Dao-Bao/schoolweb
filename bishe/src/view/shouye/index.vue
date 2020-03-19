<template>
        <el-container>
            <top></top>
            <el-main>

                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1" class="first"><router-link to="/">首页</router-link></el-menu-item>
                    <el-menu-item index="2" class="first"><router-link to="/xygk">学院概况</router-link></el-menu-item>
                    <el-menu-item index="3" class="first"><router-link to="/szll">师资力量</router-link></el-menu-item>
                    <el-menu-item index="4" class="first"><router-link to="jyjx">教育教学</router-link></el-menu-item>
                </el-menu>

                <router-link to="/"><img src="@/assets/south.jpg" class="southgate" /></router-link>

                <el-row class="tubiao">
                    <el-col :span="6">
                        <a href="http://61.181.145.1:89/jsxsd/" target="_blank">
                            <div class="grid-content">
                                <img src="@/assets/jiaowuchu.png" class="jiaowu">
                            </div>
                            <div class="grid-content">
                                <span>教务处</span>
                            </div>
                        </a>
                    </el-col>

                    <el-col :span="6">
                        <a href="#" target="_blank">
                            <div class="grid-content">
                                <img src="@/assets/tushuguan.png" class="library">
                            </div>
                            <div class="grid-content">
                                <span>图书馆</span>
                            </div>
                        </a>
                    </el-col>

                    <el-col :span="6">
                        <router-link to="/login">
                            <div class="grid-content">
                                <img src="@/assets/oa.png" class="xiaoyuanoa">
                            </div>
                            <div class="grid-content">
                                <span>校园OA</span>
                            </div>
                        </router-link>
                    </el-col>

                    <el-col :span="6">
                        <router-link to="/lianxiwomen">
                            <div class="grid-content">
                                <img src="@/assets/lianxiwomen.png" class="lianxiwomen">
                            </div>
                            <div class="grid-content">
                                <span>联系我们</span>
                            </div>
                        </router-link>
                    </el-col>
                </el-row>

                <el-row class="neirong">
                    <el-col :span="16">
                        <div class="grid-content">
                            <span class="news_school">学院新闻</span>
                            <span class="news_more">more+</span>
                        </div>

                        <div class="xueyuanxinwen">
                            <div class="block">
                                <el-carousel height="230px">
                                    <el-carousel-item v-for="item in pic" :key="item.id">
                                        <span class="picdesc">{{item.desc}}</span>
                                        <img class="lunbopic" :src="item.src" >
                                    </el-carousel-item>
                                </el-carousel>
                            </div>

                            <div class="neirongright">
                                <vue-seamless-scroll :data="wenzhang" class="seamless-warp">
                                    <ul class="item">
                                        <li v-for="item in wenzhang" :key="item.id">
                                            <!-- <span class="title" v-text="item.title"></span> -->
                                            <span class="wenzhangtitle">{{item.desc}}</span>
                                            <!-- <a :href="item.url"></a> -->
                                        </li>
                                    </ul>
                                </vue-seamless-scroll>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="xy">
                        <div class="grid-content">
                            <div class="xiaoyuanwenhua">校园文化</div>
                            <!-- <div>
                                <el-carousel-item v-for="item in xyxw" :key="item.id">
                                    <div>
                                        <img class="xypic" :src="item.src">
                                    </div>
                                    <span class="xypicdesc">{{item.desc}}</span>
                                </el-carousel-item>
                            </div> -->
                            <div class="xyblock">
                                <el-carousel height="230px">
                                    <el-carousel-item v-for="item in xyxw" :key="item.id">
                                         <a :href="item.url">
                                            <div>
                                                <img class="xypic" :src="item.src">
                                            </div>
                                            <span class="xypicdesc">{{item.desc}}</span>
                                        </a>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </div>
                    </el-col>
                </el-row>

            </el-main><br>
            <el-footer>
                <bottom></bottom>
            </el-footer>
        </el-container>
</template>

<script>
import axios from "axios"
import top from '@/components/top'
import bottom from '@/components/bottom'
export default {
    components: {
        top,
        bottom
    },
    data() {
      return {
        activeIndex: '1',
        pic: [{
            "id": "001",
            "src": "http://img5.imgtn.bdimg.com/it/u=2695721188,1525116433&fm=26&gp=0.jpg",
            "desc": "习大大1",
            "url": "http://cpc.people.com.cn/n1/2019/1213/c64387-31504812.html"
        }, {
            "id": "002",
            "src": "http://img0.imgtn.bdimg.com/it/u=3742247576,4242489980&fm=26&gp=0.jpg",
            "desc": "习大大2",
            "url": "http://xinhuanet.com/2020-02/29/c_1210495483.htm"
        }, {
            "id": "003",
            "src": "http://img1.imgtn.bdimg.com/it/u=2281144020,1116211735&fm=26&gp=0.jpg",
            "desc": "习大大3"
        }],
        wenzhang: [{
            "id": "01",
            "desc": "《北京科技大学天津学院》",
            "url": "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%93%88%E5%A3%AB%E5%A5%87&step_word=&hs=0&pn=11&spn=0&di=68420&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3960053082%2C2550490345&os=3755958612%2C792225161&simid=3351171699%2C139520393&adpicid=0&lpn=0&ln=967&fr=&fmq=1575940293179_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn19%2F318%2Fw640h478%2F20180430%2Fdce3-fzvpatr5863804.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fh_z%26e3Bftgw_z%26e3Bv54_z%26e3BvgAzdH3Fw6ptvsj_m98n0cddln_80j9w80jcaa8aamlj3_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
        }, {
            "id": "02",
            "desc": "《信息工程学院》"
        }, {
            "id": "03",
            "desc": "《有关信息工程学院放假通知》",
            "ulr": "http://img0.imgtn.bdimg.com/it/u=427809846,2671786902&fm=26&gp=0.jpg",
        }, {
            "id": "04",
            "desc": "《诚信考试》"
        }, {
            "id": "05",
            "desc": "《谨防电信诈骗》"
        }, {
            "id": "06",
            "desc": "《四六级考试通知》"
        }, {
            "id": "07",
            "desc": "《夜不归宿查处办法》"
        }, {
            "id": "08",
            "desc": "《上课规范》"
        }],
        xyxw: [{
            "id": "0001",
            "src":"http://img4.imgtn.bdimg.com/it/u=2596771272,3028947836&fm=26&gp=0.jpg",
            "desc": "新生文艺汇演"
        }, {
            "id": "0002",
            "src": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1548418145,3463215138&fm=26&gp=0.jpg",
            "desc": "孝心社"
        }]
      }
    },
//     methods: {
//         handleSelect(key, keyPath) {
//             console.log(key, keyPath);
//         },
//         getChange(){
//             axios.get('static/mock/index.json')
//             .then( (res) => {
//                 //请求返回的数据
//                 console.log(res)
//                 //赋值
//                 this. objData = res
//             })
//             .catch( (error) => {
//                 console.log(error);
//             });
//     },
// }
}
</script>

<style>
.el-main {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    margin-top: 4%;
}
.first {
    width: 25%;
    height: 30px;
    font-size: 25px;
    color: #FFF;
}
.second {
    font-size: 25px;
    color: #FFF;
}
.el-menu-demo {
    margin: 0;
    padding: 0;
    width: 100%;
    line-height: 30px;
    font-family: "华文新魏";
    text-align: center;
    border-bottom: none;
    background-color:#003867;
    color: #FFF;
}
.southgate {
    width: 95%;
    height: 600px;
    border-radius: 10px;
    margin-top: -7%;
}
a {
    text-decoration:none;
    color: black;
}
.el-col {
    border-radius: 4px;
}
.grid-content {
    min-height: 36px;
}
.row-bg {
    background-color: #f9fafc;
}
.tubiao {
    width: 95%;
    margin: 0 auto;
    border-radius: 10px;
    background-color: gray;
}
.jiaowu, .library, .xiaoyuanoa, .lianxiwomen {
    width: 10%;
}
.neirong {
    width: 95%;
    margin: 0 auto;
    border-radius: 10px;
}
.news_school {
    float: left;
    font-family: "华文新魏";
    font-size: 23px;
}
.news_more {
    float: right;
    font-family: "华文新魏";
    font-size: 18px;
}
.more {
    display: inline
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.block {
    width: 40%;
    height: 100%;
    float: left;
    background-color:rgba(255, 255, 255, 0);
}
.neirongright {
    width: 55%;
    height: 40%;
    float: right;
    background-color: aqua;
}
.lunbopic {
    width: 100%;
    height: 100%;
}
.picdesc {
    background-color: rgba(255, 255, 255, 0)
}
el-carousel__item {
    background-color:rgba(255, 255, 255, 0);
}
.seamless-warp {
    height: 230px;
    overflow: hidden;
    background-color:darkgrey;
}
li {
    list-style-type:none;
}
.xiaoyuanwenhua {
    font-family: "华文新魏";
    font-size: 23px;
    margin: 10px;
}
.xypic {
    width: 100%;
    height: 100%;
}
.xyblock {
    width: 60%;
    height: 100%;
    margin:0 auto;
    background-color:rgba(255, 255, 255, 0);
}
</style>