<template>
  <div>

    <top></top> <br/>
    <!-- <div class="btn"> -->
      <button type="button" class="layui-btn" id="upload"><i class="layui-icon"></i>上传文件</button><br>
      <span>点击上方按钮上传文件</span>
    <!-- </div> -->
    <bottom></bottom>
  </div>

</template>

<script>
// import axios from "axios"
import top from "@/components/top"
import bottom from "@/components/bottom"
export default {
  inject: ["reload"],
  data () {
    return {
    }
  },
  components: {
		top,
		bottom
  },
  mounted() {
    layui.use('upload', function(){
      var upload = layui.upload;
      
      //执行实例
      var uploadInst = upload.render({
        elem: '#upload',
        url: 'http://127.0.0.1:8990/upload',
        accept: 'file' ,//普通文件
        done: function(res){
          if(res.code == "0") {
            alert("上传成功");
            console.log(res.message);
            this.reload()
          } else if(res.code == "1") {
            alert("上传失败");
            console.log(res.msg);
          }
          // layer.msg('上传成功');
          // console.log(res);
        }
      });
    })
  }
}
</script>

<style scoped>
  /* .btn {
    margin: 0 auto;
  }  */
  .layui-btn {
    margin: 0 auto;
  }
</style>