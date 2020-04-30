<template>
  <div>
    <top></top><br/>

    <el-form ref="form" :model="form" label-width="150px" class="form">
				<el-form-item label="教师姓名">
					<el-input v-model="form.teachername"></el-input>
				</el-form-item>

				<el-form-item label="教师性别">
					<el-radio-group v-model="form.teachersex">
						<el-radio label="男"></el-radio>
						<el-radio label="女"></el-radio>
					</el-radio-group>
				</el-form-item>

        <el-form-item label="教师简介">
					<el-input v-model="form.teacherdesc"></el-input>
				</el-form-item>


				<el-form-item label="教师照片">
					<el-upload
						class="upload-demo"
						drag
						multiple
						:on-change="getFile"
						action
						v-model="form.teacherheadersrc"
						>
						<img v-if="imageUrl" :src="imageUrl" class="avatar" />
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						<div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
					</el-upload>
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
	inject: ["reload"],
  data() {
    return {
      form: {
          teachername: "",
          teachersex: "",
					teacherdesc: "",
					teacherheadersrc: ""
				},
      imageUrl: ''
    }
  },
  components: {
		top,
		bottom,
		// uploadHeader
  },
  methods: {
		goBack() {
			this.$router.push({path: "/loginsuccess"});
		},
		getFile (file, fileList) {
      this.getBase64(file.raw).then(res => {
				this.$emit('getImgBase', res);
				this.imageUrl = res;
				// console.log(this.imageUrl,'111')
      })
    },
    getBase64 (file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
			})
		},
		onSubmit() {
			// console.log(this.imageUrl,'333');

			this.$axios({
				method: "post",
				url: "http://127.0.0.1:8990/addteachers",
				dataType: 'JSONP',
				data : {
					teachername: this.form.teachername,
          teachersex: this.form.teachersex,
					teacherdesc: this.form.teacherdesc,
					teacherheadersrc: this.imageUrl
				}
			}).then((res) => {
				if(res.data.code == "0") {
					// res.send("提交成功");
					alert("提交成功");
					console.log(this.imageUrl);
					this.reload();
        }
			}).catch((err) => {
				console.log(err);
			});
		}
	},
	watch: {
		imageUrl:function(newVal){
			console.log(newVal,'222')
		}
	}
}
</script>

<style scoped>
.form {
	width: 40%;
	margin: 0 auto;
	padding: 6%;
}
.btnr {
	float: right;
}
</style>