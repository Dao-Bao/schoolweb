<template>
  <div>
    <top></top><br/>

    <el-container style="height: 500px; border: 1px solid #eee">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>上传文件</template>
            <el-menu-item-group>
              <el-menu-item v-for="(item,index) of loginSuccess" :key="index" :index="item.index">
                <router-link :to="item.routerto">{{item.name}}</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item-group>
            <el-menu-item  index="2"><i class="el-icon-menu"></i>用户管理</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
  
      <el-container>
        <el-main>
            <el-table :data="news" border style="width: 100%" height="200">
              <el-table-column v-for="(item,index) of newsTableData" :key="index" :prop="item.prop" :label="item.label"  :width="item.width">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template>
                  <el-button @click="removenews" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table><br>

            <el-table :data="regulations" border style="width: 100%" height="180">
              <el-table-column v-for="(item,index) of regulationsTableData" :key="index" :prop="item.prop" :label="item.label"  :width="item.width">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template>
                  <el-button @click="removeregulations" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table><br>

            <el-table :data="cultures" border style="width: 100%" height="180">
              <el-table-column v-for="(item,index) of culturesTableData" :key="index" :prop="item.prop" :label="item.label"  :width="item.width">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template>
                  <el-button @click="removecultures" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table><br>
        </el-main>
      </el-container>
    </el-container>

    <bottom></bottom>
  </div>
</template>

<script>
import top from "@/components/top"
import bottom from "@/components/bottom"
import { loginSuccess,newsTableData,regulationsTableData,culturesTableData } from "@/config/config.js"
export default {
  data() {
      return {
        loginSuccess: [],
        newsTableData: [],
        regulationsTableData: [],
        culturesTableData: [],
        news: [],
        regulations: [],
        cultures: []
      }
    },
  components: {
		top,
		bottom
  },
  methods: {
    getNews() {
				this.$axios.get("http://127.0.0.1:8990/findnews", {
				})
				.then(this.getFindNewsSucc)
			},
			getFindNewsSucc (res) {
				// console.log(res.data.newsimgsrc);
				this.news = res.data;
				// console.log(this.pic);
      },
      getFindRegulations() {
				this.$axios.get("http://127.0.0.1:8990/findregulations")
				.then(this.getFindRegulationsSucc)
			},
			getFindRegulationsSucc (res) {
				// console.log(res.data);
				this.regulations = res.data;
				// console.log(this.wenzhang);
      },
      getSchoolCulture() {
				this.$axios.get("http://127.0.0.1:8990/findschoolculture")
				.then(this.getSchoolCultureSucc)
			},
			getSchoolCultureSucc (res) {
				// console.log(res.data);
				this.cultures = res.data;
      },
      removenews() {
        this.$axios.get("http://127.0.0.1:8990/removenews")
        .then( alert("删除成功") )
      },
      removeregulations() {
        this.$axios.get("http://127.0.0.1:8990/removeregulations")
        .then( alert("删除成功" )
        )
      },
      removecultures() {
        this.$axios.get("http://127.0.0.1:8990/removecultures")
        .then( alert("删除成功") )
      }
  },
  mounted() {
    this.getNews(),
    this.getFindRegulations(),
    this.getSchoolCulture(),
    this.loginSuccess = loginSuccess,
    this.newsTableData = newsTableData,
    this.regulationsTableData = regulationsTableData,
    this.culturesTableData = culturesTableData
  }
}
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>