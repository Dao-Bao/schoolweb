<template>
    <div>
        <top></top>

        <div class="zhongjian">
            <h2>联系我们</h2>
            <span>地址：天津市宝坻区京津新城珠江北环东路1号</span><br>
            <span>邮编：301830</span>
        </div>

        <div class="biao">
            <el-table :data="lianxibiao" stripe class="lianxibiao">
                <el-table-column prop="bumen" label="部门" width="180"></el-table-column>
                <el-table-column prop="phone" label="电话" width="180"></el-table-column>
            </el-table>
        </div>

        <bottom></bottom>
    </div>
</template>

<script>
import top from '@/components/top'
import bottom from '@/components/bottom'
export default {
    components: {
        top,
        bottom
    },
    data() {
        return {
            lianxibiao: [{
                bumen: "学院办公室",
                phone: "22410800",
            }, {
                bumen: "教务处",
                phone: "22410732/0555",
            }, {
                bumen: "人事处",
                phone: "22410768/0077",
            }, {
                bumen: "宣传部",
                phone: "22410352",
            }, {
                bumen: "保卫处",
                phone: "22411900",
            }, {
                bumen: "学生工作办公室",
                phone: "22410298",
            }, {
                bumen: "团委",
                phone: "22410730",
            }, {
                bumen: "心理咨询中心",
                phone: "22410981",
            }, {
                bumen: "招生就业处（就业）",
                phone: "22412672/2902",
            }, {
                bumen: "招办就业处（招生）",
                phone: "22410960/0969",
            }, {
                bumen: "国际交流合作部",
                phone: "22410389",
            }, {
                bumen: "科研处",
                phone: "22410737",
            }, {
                bumen: "财务处",
                phone: "22410769/0897",
            }, {
                bumen: "基建产业处",
                phone: "22410976",
            }, {
                bumen: "后勤处",
                phone: "22410722",
            }, {
                bumen: "资产管理中心",
                phone: "22410919",
            }, {
                bumen: "基础部",
                phone: "22410502",
            }, {
                bumen: "体育部",
                phone: "22410422",
            }, {
                bumen: "思政部",
                phone: "22410736",
            }, {
                bumen: "图书馆",
                phone: "22410526",
            }, {
                bumen: "信息工程学院",
                phone: "22410704",
            }]
        }
    }
}
</script>

<style scoped>
.zhongjian {
    text-align: center;
    /* background-color: red; */
}
.biao {
    width: 100;
}
.lianxibiao {
    width: 100%;
    margin-left: 40%;
    /* background-color: green; */
}
</style>