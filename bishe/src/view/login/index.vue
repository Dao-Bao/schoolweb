<template>
	<div class="denglu">
		<top></top><br>

		<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="用户名">
					<el-input v-model="form.username"></el-input>
				</el-form-item>

				<el-form-item label="密码">
					<el-input v-model="form.userpassword" type="password"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="onSubmit">登陆</el-button>
					<el-button>取消</el-button>
				</el-form-item>
		</el-form>

		<bottom></bottom>
	</div>
</template>

<script>
import axios from "axios"
import top from "@/components/top"
import bottom from "@/components/bottom"
// import { mapMutations } from 'vuex';
export default {
	data() {
      return {
        form: {
          username: '',
          userpassword: '',
        }
      }
    },
	components: {
		top,
		bottom,
	},

	methods: {
		onSubmit() {
			this.$axios({
				method: "post",
				url: "http://127.0.0.1:8990/login",
				dataType: 'JSONP',
				data : {
					username: this.form.username,
					userpassword: this.form.userpassword
				}
			}).then((res) => {
				if(res.data.code == '0') {
					this.$router.push({path: "/loginsuccess"});
				} else if (res.data.code == '1') {
					alert("账号未注册，请联系管理员注册");
				} else if (res.data.code  == '2') {
					alert("密码错误");
				}
				// console.log(res.data);
			}).catch((err) => {
				console.log(err);
			});
		}
	}
}

</script>

<style scoped>
.denglu {
	margin: 0 auto;
}
.input {
	width: 25%;
	margin: 0 auto;
}
</style>