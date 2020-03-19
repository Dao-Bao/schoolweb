<template>
        <el-container>
            <top></top><br>
            <el-main>
                <div>
                信息工程学院成立于2005年，前身是信息工程系。
                </div>
                <div>
                自信息工程学院成立以来，随着社会的需要，逐步改变专业的方向。
                </div>
                <div>
                目前信息工程学院有4个专业，分别是：计算机科学与技术、通信工程、自动化、无人机。
                </div>
                <div>
                无人机专业为2017级新增专业。现在信息工程学院学生总数在3000人左右。
                </div>
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
    margin: 0 auto;
    padding: 0;
    width: 100%;
    text-align: center;
    margin-top: 4%;
}
</style>