<template>
  <div>
    <top></top><br/>

    <el-row class="tac">
        <el-col :span="5">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>上传文件</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/addnews">上传学院新闻</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/addregulations">上传通知文件</router-link></el-menu-item>
              <el-menu-item index="1-3">上传学院文化</el-menu-item>
              <el-menu-item index="1-4">上传教师信息</el-menu-item>
            </el-menu-item-group>

          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>


        </el-menu>
      </el-col>
    </el-row>



    <bottom></bottom>
  </div>
</template>

<script>
import top from "@/components/top"
import bottom from "@/components/bottom"
export default {
    components: {
		top,
		bottom
  }
}
</script>