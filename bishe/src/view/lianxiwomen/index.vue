<template>
    <div>
        <top></top>

        <div class="zhongjian">
            <h2>联系我们</h2>
            <span>地址：天津市宝坻区京津新城珠江北环东路1号</span><br>
            <span>邮编：301830</span>
        </div>

        <div class="biao">
            <el-table :data="lianxibiao"  stripe class="lianxibiao">
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
        bottom,
    },
    data() {
        return {
            lianxibiao: [],
            lxwmTableDate: [{
                bumen: "",
                phone: ""
            }]
        }
    },
    methods: {
        getlianxibiao() {
            this.$axios.get("http://127.0.0.1:8990/findlianxibiao")
            .then(this.getLianxibiaoSucc);
        },
        getLianxibiaoSucc(res) {
            console.log(res.data);
            this.lianxibiao = res.data;
        }
    },
    mounted() {
        this.getlianxibiao()
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