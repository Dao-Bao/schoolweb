<template>
		<el-container>
				<top></top>
				<el-main>
					<el-menu class="el-menu-demo" mode="horizontal">
							<el-menu-item v-for="item of menuConfig"  class="first" :key="item.id">
								<router-link :to="item.url">{{item.title}}</router-link>
							</el-menu-item>
					</el-menu>
					<router-link to="/"><img src="@/assets/south.jpg" class="southgate" /></router-link>


					<el-row class="tubiao">

						<el-col :span="6" v-for="(item, index) of aMenuConfig" :key="index">
							<a :href="item.href" target="_blank">
								<div class="grid-content">
										<img :src="item.imgsrc" class="jiaowu">
								</div>
								<div class="grid-content">
										{{item.title}}
								</div>
							</a>
						</el-col>

						<el-col :span="6" v-for="(item, index) of rMenuConfig" :key="index">
							<router-link :to="item.url">
								<div class="grid-content">
										<img :src="item.imgsrc" class="xiaoyuanoa">
								</div>
								<div class="grid-content">
										<span>{{item.title}}</span>
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
												<span class="picdesc">{{item.newstitle}}</span>
												<img class="lunbopic" :src="item.newsimgsrc" @click="jump(item)">
											</el-carousel-item>
										</el-carousel>
									</div>

									<div class="neirongright">
										<vue-seamless-scroll :data="wenzhang" class="seamless-warp">
											<ul class="item">
												<li v-for="item in wenzhang" :key="item.id" @click="test(item)">
													<span class="wenzhangtitle" >{{item.regulationsname}}</span>
												</li>
											</ul>
										</vue-seamless-scroll>
									</div>
								</div>
							</el-col>
							<el-col :span="8" class="xy">
								<div class="grid-content">
									<div class="xiaoyuanwenhua">校园文化</div>

									<div class="xyblock">
										<el-carousel height="230px">
											<el-carousel-item v-for="item in xyxw" :key="item.id" >
												<div>
														<img class="xypic" :src="item.schoolcultureimgsrc" >
												</div>
												<span class="xypicdesc">{{item.schoolculturedesc}}</span>
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
import {menuConfig, aMenuConfig, rMenuConfig } from "@/config/config.js"
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
				menuConfig: [],
				aMenuConfig: [],
				rMenuConfig: [],
        pic: [{
            "id": "",
            "newsimgsrc": "",
            "newstitle": "",
            "newsurl": ""
        }],
        wenzhang: [{
            "id": "",
            "regulationsname": "",
            "regulationsUrl": ""
        }],
        xyxw: [{
            "id": "",
            "schoolcultureimgsrc": "",
            "schoolculturedesc": ""
        }]
			}
		},
		methods: {
			test(item){
        window.open(item.regulationsUrl);
			},
			jump(item) {
				window.open(item.newsurl);
			},
			getNews() {
				this.$axios.get("http://127.0.0.1:8990/findnews", {
				})
				.then(this.getFindNewsSucc)
			},
			getFindNewsSucc (res) {
				// console.log(res.data.newsimgsrc);
				this.pic = res.data;
				// console.log(this.pic);
			},
			getFindRegulations() {
				this.$axios.get("http://127.0.0.1:8990/findregulations")
				.then(this.getFindRegulationsSucc)
			},
			getFindRegulationsSucc (res) {
				// console.log(res.data);
				this.wenzhang = res.data;
				// console.log(this.wenzhang);
			},
			getSchoolCulture() {
				this.$axios.get("http://127.0.0.1:8990/findschoolculture")
				.then(this.getSchoolCultureSucc)
			},
			getSchoolCultureSucc (res) {
				// console.log(res.data);
				this.xyxw = res.data;
			}
		},
		mounted() {
			this.menuConfig = menuConfig,
			this.aMenuConfig = aMenuConfig,
			this.rMenuConfig = rMenuConfig,
			this.getNews(),
			this.getFindRegulations(),
			this.getSchoolCulture()
		}
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
.jiaowu, .xiaoyuanoa {
    width: 15%;
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
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	font-size: 13px;
    background-color: rgba(255, 255, 255, 0.5);
}
el-carousel__item {
    background-color:rgba(204, 202, 202, 0.034);
}
.is-active is-animating {
	background-color:rgba(255, 255, 255, 0.103);
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