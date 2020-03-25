<template>
  <div>

    <top></top> <br>
    <button type="button" class="layui-btn" id="upload"><i class="layui-icon"></i>上传文件</button>

    <bottom></bottom>
  </div>

</template>

<script>
// import axios from "axios"
import top from "@/components/top"
import bottom from "@/components/bottom"
export default {
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
        url: 'http://127.0.0.1:8990/upload', //改成您自己的上传接口
        accept: 'file' ,//普通文件
        done: function(res){
          if(res.code == "0") {
            alert("上传成功");
          }
          // layer.msg('上传成功');
          // console.log(res);
        }
      });
    })
  }
}
</script>