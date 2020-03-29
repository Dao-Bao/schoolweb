<template>
  <div>
    <el-upload class="avatar-uploader" :on-change="getFile" action>
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="tips">
      <span class="el-icon-upload2"></span>点击更换头像
      <span class="el-icon-upload2"></span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    getFile (file, fileList) {
      // console.log(file);
      this.getBase64(file.raw).then(res => {
        // this.base64ToFile(res);
        this.imageUrl = res;
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
    // base64ToFile (base) {
    //   const arr = base.split(',');
    //   const mime = arr[0].match(/:(.*?);/)[1];
    //   const bstr = atob(arr[1]);
    //   let n = bstr.length;
    //   const u8arr = new Uint8Array(n);
    //   while (n--) {
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   if (window.navigator.msSaveBlob) {
    //     // for ie 10 and later
    //     try {
    //       const blobObject = new Blob([u8arr], { type: mime });
    //       window.navigator.msSaveBlob(blobObject, 'aaa.xls');
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   } else {
    //     const url = window.URL.createObjectURL(new Blob([u8arr], { type: mime }));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', 'aaa.doc');
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link); // 下载完成移除元素
    //     window.URL.revokeObjectURL(url); // 释放掉blob对象
    //   }
    // },
  }
}
</script>
<style  scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.tips {
  margin-left: 15%;
  margin-top: 10px;
  color: bisque;
}
</style>
