<template>
        <el-container>
            <top></top>
            <el-main>
              信息工程学院目前有4个专业，每个专业都有对应的专业课和专业选修课。
            </el-main><br>
            <el-footer>
                <bottom></bottom>
            </el-footer>
        </el-container>
</template>

<script>
import axios from "axios"
import top from '@/components/top'
import bottom from '@/components/bottom'
export default {
    components: {
        top,
        bottom
    },
    data() {
      return {
        
      }
    }
}
</script>

<style>
.el-main {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    margin-top: 4%;
}
</style>