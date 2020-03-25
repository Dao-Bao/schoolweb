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
					<button type="button" class="layui-btn" id="upload"><i class="layui-icon"></i>上传头像</button>
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
					alert("提交成功");
        }
			}).catch((err) => {
				console.log(err);
			});
		}
	},
	mounted() {
    layui.use('upload', function(){
      var upload = layui.upload;
      
      //执行实例
      var uploadInst = upload.render({
        elem: '#upload',
        url: 'http://127.0.0.1:8990/addteachers',
				accept: 'file' ,//普通文件
				exts: '.png |.jpg| .jepg',  //上传文件格式
        done: function(res){
          if(res.code == "0") {
            alert("上传成功");
            console.log(res.message);
          } else if(res.code == "1") {
            alert("上传失败");
            console.log(res.msg);
          }
        }
      });
    })
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