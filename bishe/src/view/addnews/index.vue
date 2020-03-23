<template>
  <div>
    <top></top><br/>

				<!-- <div class="addnewsleft">
					<el-row class="tac">
						<el-col :span="5">
						<el-menu
							default-active="2"
							class="el-menu-vertical-demo"
							background-color="#545c64"
							text-color="#fff"
							active-text-color="#ffd04b">
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>上传文件</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="1-1"><router-link to="/addnews">上传学院新闻</router-link></el-menu-item>
									<el-menu-item index="1-2"><router-link to="/addregulations">上传通知文件</router-link></el-menu-item>
									<el-menu-item index="1-3"><router-link to="/addschoolculture">上传学院文化</router-link></el-menu-item>
									<el-menu-item index="1-4"><router-link to="/addteachers">上传教师信息</router-link></el-menu-item>
								</el-menu-item-group>

							</el-submenu>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
								<span slot="title">用户管理</span>
							</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
			</div> -->


			<div class="addnewsright">
				<el-form ref="form" :model="form" label-width="120px" class="addnews">
						<el-form-item label="新闻标题">
							<el-input v-model="form.newstitle"></el-input>
						</el-form-item>

						<el-form-item label="新闻图片地址">
							<el-input v-model="form.newsimgsrc"></el-input>
						</el-form-item>

						<el-form-item label="新闻网址">
							<el-input v-model="form.newsurl"></el-input>
						</el-form-item>

						<el-form-item>
							<el-button type="primary" @click="onSubmit">上传</el-button>
							<el-button @click="goBack">取消</el-button>
						</el-form-item>
				</el-form>
			</div>


    <bottom></bottom>
  </div>
</template>

<script>
import axios from "axios"
import top from "@/components/top"
import bottom from "@/components/bottom"
export default {
  data() {
    return {
      form: {
          newstitle: "",
          newsimgsrc: "",
          newsurl: ""
        }
    }
  },
  components: {
		top,
		bottom
  },
  methods: {
		goBack() {
			this.$router.push({path: "/loginsuccess"});
		},
		onSubmit() {
			this.$axios({
				method: "post",
				url: "http://127.0.0.1:8990/addnews",
				dataType: 'JSONP',
				data : {
					newstitle: this.form.newstitle,
          newsimgsrc: this.form.newsimgsrc,
          newsurl: this.form.newsurl
				}
			}).then((res) => {
				if(res.data.code == "0") {
					// res.send("提交成功");
					alert("提交成功")
        }
			}).catch((err) => {
				console.log(err);
			});
		}
	}
}
</script>

<style>
/* .addnewsleft {
	/* float: left; */
	/* display: inline; */
/* } */  
.addnewsright {
	/* display: inline; */
	margin: 20%;
	/* text-align: center; */
	/* background-color: blueviolet; */
}
.addnews {
	width: 60%;
	/* float: right; */
}
</style>