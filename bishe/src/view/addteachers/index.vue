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
					<div>
						<el-upload class="avatar-uploader" :on-change="getFile" action>
							<img v-if="imageUrl" :src="teacherheadersrc" class="avatar" />
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
						<div class="tips">
							<span class="el-icon-upload2"></span>点击更换头像
							<span class="el-icon-upload2"></span>
						</div>
							{{imageUrl}}
							{{teacherheadersrc}}
					</div>
						<!-- <upload-header></upload-header> -->
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
import uploadHeader from "./components/uploadheader" 
export default {
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
		uploadHeader
  },
  methods: {
		goBack() {
			this.$router.push({path: "/loginsuccess"});
		},
		getFile (file, fileList) {
      // console.log(file);
      this.getBase64(file.raw).then(res => {
        // this.base64ToFile(res);
        this.form.teacherheadersrc = res;
        console.log(res);
      })
    },
    getBase64 (file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = '';
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        }
        reader.onerror = function (error) {
          reject(error);
        }
        reader.onloadend = function () {
          resolve(imgResult);
        }
      })
    },
		onSubmit() {
			this.$axios({
				method: "post",
				url: "http://127.0.0.1:8990/addteachers",
				dataType: 'JSONP',
				data : {
					teachername: this.form.teachername,
          teachersex: this.form.teachersex,
					teacherdesc: this.form.teacherdesc,
					teacherheadersrc: this.form.teacherheadersrc
				}
			}).then((res) => {
				if(res.data.code == "0") {
					// res.send("提交成功");
					alert("提交成功");
        }
			}).catch((err) => {
				console.log(err);
			});
		}
	},
	// mounted() {
  //   layui.use('upload', function(){
  //     var $ = layui.jquery,
	// 		upload = layui.upload;
      
  //     //执行实例
	// 		var uploadInst = upload.render({
	// 				elem: '#test1',
	// 				url: 'http://127.0.0.1:8990/addteachers', //改成您自己的上传接口
	// 				before: function(obj){
	// 					//预读本地文件示例，不支持ie8
	// 					obj.preview(function(index, file, result){
	// 						$('#demo1').attr('src', result); //图片链接（base64）
	// 					});
	// 				},
	// 				done: function(res){
	// 					//如果上传失败
	// 					if(res.code > 0){
	// 						return layer.msg('上传失败');
	// 					}
	// 					//上传成功
	// 				},
	// 				error: function(){
	// 					//演示失败状态，并实现重传
	// 					var demoText = $('#demoText');
	// 					demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
	// 					demoText.find('.demo-reload').on('click', function(){
	// 						uploadInst.upload();
	// 					});
	// 				}
	// 			});
  //   })
  // }
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