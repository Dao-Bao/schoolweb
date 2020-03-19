<template>
    <el-header>
        <div class="ding">
            <div class="lefttitle">
                <img src="@/assets/logo.png" class="logo"/>
                <div class="BK">北京科技大学天津学院<br/>
                信息工程学院</div>
            </div>
            <div class="righttitle">
                <div class="none"></div><br/>
                <div>
                    <el-input
                        placeholder="请输入搜索内容......"
                        suffix-icon="el-icon-search"
                        v-model="input"
                        class="search">
                    </el-input>
                </div>
            </div>
        </div>
        <!-- <img src="@/assets/south.jpg" class="southgate"> -->
    </el-header>
</template>

<script>
export default {
   data() {
      return {
          input: "",
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.el-header {
    /* background-color: #B3C0D1;s */
    background-color: skyblue;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
    border-radius: 10px;
    margin: 0;
    padding: 0
}

  .ding {
      background-color: skyblue;
      font-family: "华文新魏";
      color: #FFF;
      border-radius: 10px;
  }
  .lefttitle {
      width: 60%;
      background-color: rgb(4, 147, 204);
      float: left;
  }
  .righttitle {
      width: 40%;
      background-color: rgb(4, 147, 204);
      float: right;
  }
  .logo {
      width: 8%;
      height: 8%;
      float: left;
      margin-top: 0.5%;
      margin-left: 0.5%;
  }
  .BK {
      margin-left: 1%;
      font-size: 25px;
  }
  .XX {
      line-height: 30px;
      font-size: 20px;
      margin-left: 4%;
  }
  .search {
    /* display: inline; */
    float: right;
    width: 30%;
    margin-right: 6%;  /**布局有问题，不能自适应 */
   
  }
  .el-menu-demo {
      width: 100%;
      background-color: rgba(255, 254, 254, 0.1);
      text-align: center;
      border-radius: none;
      font-family: "华文新魏";
      display: flex;            /*水平布局*/ 
      justify-content: center;   /*水平布局*/
  }
 

  
  a {
      text-decoration:none;
  }
  .bottomtitle {
      margin: 0;
      padding: 0;
      width: 100%;
      background-color: #403f3f;
  }
</style>