<template>
  <div>
    <top></top><br/>

			<div class="addnews">
				<el-form ref="form" :model="form" label-width="120px" class="news">
						<el-form-item label="部门">
							<el-input v-model="form.bumen"></el-input>
						</el-form-item>

						<el-form-item label="联系方式">
							<el-input v-model="form.phone"></el-input>
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
  data() {
    return {
      form: {
          bumen: "",
          phone: "",
        }
    }
  },
  components: {
		top,
		bottom
  },
  methods: {
		goBack() {
			this.$router.push({path: "/loginsuccessadmin"});
		},
		onSubmit() {
			this.$axios({
				method: "post",
				url: "http://127.0.0.1:8990/addlianxibiao",
				dataType: 'JSONP',
				data : {
					bumen: this.form.bumen,
          phone: this.form.phone,
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