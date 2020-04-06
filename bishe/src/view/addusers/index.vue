<template>
  <div>
    <top></top><br/>

			<div class="addusers">
				<el-form ref="form" :model="form" label-width="120px" class="users">
						<el-form-item label="用户名">
							<el-input v-model="form.username"></el-input>
						</el-form-item>

						<el-form-item label="密码">
							<el-input v-model="form.userpassword"></el-input>
						</el-form-item>

						<el-form-item label="身份标识">
							<el-radio-group v-model="form.useridentity">
								<el-radio label="管理员"></el-radio>
								<el-radio label="普通用户"></el-radio>
							</el-radio-group>
						</el-form-item>

						<el-form-item>
							<el-button type="primary" @click="onSubmit">确定</el-button>
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
  data() {
    return {
      form: {
          username: "",
					userpassword: "",
					useridentity: ""
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
				url: "http://127.0.0.1:8990/adduser",
				dataType: 'JSONP',
				data : {
					username: this.form.username,
					userpassword: this.form.userpassword,
					useridentity: this.form.useridentity
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
.addusers {
	width: 60%;
	margin: 0 auto;
	padding: 8%;
}
.users {
	width: 60%;
	margin: auto;
}
.btnr {
	float: right;
}
</style>