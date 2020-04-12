<template>
  <div>
    <top></top><br/>

			<div class="addnews">
				<el-form ref="form" :model="form" label-width="120px" class="news">
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
							<el-button @click="goBack" class="btnr">取消</el-button>
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
	inject: ["reload"],
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
					alert("提交成功");
					this.reload()
        }
			}).catch((err) => {
				console.log(err);
			});
		}
	}
}
</script>

<style scoped>
.addnews {
	width: 60%;
	margin: 0 auto;
	padding: 8%;
}
.news {
	width: 60%;
	margin: 0 auto;
}
.btnr {
	float: right;
}
</style>