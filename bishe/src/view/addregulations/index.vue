<template>
  <div>
    <top></top><br/>

    <el-form ref="form" :model="form" label-width="120px">
				<el-form-item label="文件标题">
					<el-input v-model="form.regulationstitle"></el-input>
				</el-form-item>

				<el-form-item label="文件地址">
					<el-input v-model="form.regulationsurl"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="onSubmit">上传</el-button>
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
export default {
  data() {
    return {
      form: {
          regulationstitle: "",
          regulationsurl: "",
        }
    }
  },
  components: {
		top,
		bottom
  },
  methods: {
		onSubmit() {
			this.$axios({
				method: "post",
				url: "http://127.0.0.1:8990/addregulations",
				dataType: 'JSONP',
				data : {
					regulationstitle: this.form.regulationstitle,
          regulationsurl: this.form.regulationsurl,
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