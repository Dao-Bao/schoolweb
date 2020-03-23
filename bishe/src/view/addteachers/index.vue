<template>
  <div>
    <top></top><br/>

    <el-form ref="form" :model="form" label-width="150px">
				<el-form-item label="教师姓名">
					<el-input v-model="form.teachername"></el-input>
				</el-form-item>

				<el-form-item label="教师性别">
					<el-input v-model="form.teachersex"></el-input>
				</el-form-item>

        <el-form-item label="教师简介">
					<el-input v-model="form.teacherdesc"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="onSubmit">上传</el-button>
					<el-button @click="goBack">取消</el-button>
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
          teachername: "",
          teachersex: "",
          teacherdesc: ""
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
				url: "http://127.0.0.1:8990/addteachers",
				dataType: 'JSONP',
				data : {
					teachername: this.form.teachername,
          teachersex: this.form.teachersex,
          teacherdesc: this.form.teacherdesc
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