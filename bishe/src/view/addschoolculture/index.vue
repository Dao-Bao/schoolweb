<template>
  <div>
    <top></top><br/>

    <el-form ref="form" :model="form" label-width="150px" class="form">
				<el-form-item label="学院文化图片地址">
					<el-input v-model="form.schoolcultureimgsrc"></el-input>
				</el-form-item>

				<el-form-item label="学院文化内容">
					<el-input v-model="form.schoolculturedesc"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="onSubmit">上传</el-button>
					<el-button @click="goBack" class="btnr">取消</el-button>
				</el-form-item>
		</el-form>


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
          schoolcultureimgsrc: "",
          schoolculturedesc: "",
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
				url: "http://127.0.0.1:8990/addschoolculture",
				dataType: 'JSONP',
				data : {
					schoolcultureimgsrc: this.form.schoolcultureimgsrc,
          schoolculturedesc: this.form.schoolculturedesc,
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

<style scoped>
.form {
	width: 40%;
	margin: 0 auto;
	padding: 10%;
}
.btnr {
	float: right;
}
</style>