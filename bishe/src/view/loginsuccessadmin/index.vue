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
            <el-menu-item  index="2" @click="dialogTableVisible=true"><i class="el-icon-menu"></i>用户管理</el-menu-item>
          </el-menu-item-group>

          <el-dialog title="用户管理" :visible.sync="dialogTableVisible">
            <el-button @click="addusers" type="success" round>新增用户</el-button>
            <el-table :data="users">
              <el-table-column v-for="(item,index) of oaUsers" :key="index" :property="item.prop" :label="item.label" width="150"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template>
                  <!-- <el-button @click="updateusers" type="text" size="small">修改</el-button> -->
                  <el-button @click="removeusers" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-dialog>

          <el-menu-item-group>
            <el-menu-item  index="3" @click="dialogFormVisible = true"><i class="el-icon-document"></i>联系表管理</el-menu-item>
          </el-menu-item-group>

          <el-dialog title="联系表管理" :visible.sync="dialogFormVisible">
            <el-button @click="addlianxibiao" type="success" round>新增联系部门</el-button>
            <el-table :data="lianxibiao">
              <el-table-column prop="bumen" label="部门" width="180"></el-table-column>
              <el-table-column prop="phone" label="电话" width="180"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template>
                  <el-button @click="removeusers" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>

        </el-menu>
      </el-aside>
  
      <el-container>
        <el-main>
            <el-table :data="news" border style="width: 100%" height="200">
              <el-table-column v-for="(item,index) of newsTableData" :key="index" :prop="item.prop" :label="item.label"  :width="item.width">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="180">
                <template>
                  <el-button @click="removenews" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table><br>

            <el-table :data="regulations" border style="width: 100%" height="180">
              <el-table-column v-for="(item,index) of regulationsTableData" :key="index" :prop="item.prop" :label="item.label"  :width="item.width">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="180">
                <template>
                  <el-button @click="removeregulations" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table><br>

            <el-table :data="cultures" border style="width: 100%" height="180">
              <el-table-column v-for="(item,index) of culturesTableData" :key="index" :prop="item.prop" :label="item.label"  :width="item.width">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="180">
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
import { loginSuccess,newsTableData,regulationsTableData,culturesTableData,oaUsers } from "@/config/config.js"
export default {
  data() {
      return {
        loginSuccess: [],
        newsTableData: [],
        regulationsTableData: [],
        culturesTableData: [],
        oaUsers: [],
        lxwmTableDate: [{
            bumen: "",
            phone: ""
        }],
        news: [],
        regulations: [],
        cultures: [],
        users: [],
        lianxibiao: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
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
				this.news = res.data;
      },
      getFindRegulations() {
				this.$axios.get("http://127.0.0.1:8990/findregulations")
				.then(this.getFindRegulationsSucc)
			},
			getFindRegulationsSucc (res) {
				this.regulations = res.data;
      },
      getSchoolCulture() {
				this.$axios.get("http://127.0.0.1:8990/findschoolculture")
				.then(this.getSchoolCultureSucc)
			},
			getSchoolCultureSucc (res) {
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
      },
      addusers() {
        this.$router.push({path: "/addusers"});
      },
      getUsers() {
				this.$axios.get("http://127.0.0.1:8990/findusers", {
				})
				.then(this.getFindUsersSucc)
			},
			getFindUsersSucc (res) {
				this.users = res.data;
      },
      removeusers () {
        this.$axios.get("http://127.0.0.1:8990/removeusers")
        .then( alert("删除成功") )
      },
      addlianxibiao() {
        this.$router.push({path: "/addlianxibiao"});
      },
      getlianxibiao() {
        this.$axios.get("http://127.0.0.1:8990/findlianxibiao")
        .then(this.getLianxibiaoSucc);
      },
      getLianxibiaoSucc(res) {
        this.lianxibiao = res.data;
      }
  },
  mounted() {
    this.getNews(),
    this.getFindRegulations(),
    this.getSchoolCulture(),
    this.getUsers(),
    this.getlianxibiao(),
    this.loginSuccess = loginSuccess,
    this.newsTableData = newsTableData,
    this.regulationsTableData = regulationsTableData,
    this.culturesTableData = culturesTableData,
    this.oaUsers = oaUsers
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