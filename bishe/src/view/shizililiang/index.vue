<template>
        <el-container>
            <top></top><br>
            <el-main>
                <div v-for="(item,index) in teacher" :key="index" class="teacher">
                    <div class="teacher_f">
                        <img :src="item.src">
                        <div class="jianjie">
                            <div>{{item.name}}</div>
                            <span>{{item.zhicheng}}</span>
                            <div>{{item.desc}}</div>
                        </div>
                    </div>
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
        teacher:[{
            "id": "001",
            "name":"zhangsan",
            "src": "../../assets/zhangsan.png",
            "zhicheng": "jiaoshou",
            "desc": "2003年至今在信息工程学院任教，带领学生参加各种赛事"
        }, {
            "id": "002",
            "name": "lisi",
            "src": "../../assets/lisi.png",
            "zhicheng": "jiangshi",
            "desc": "曾获高级教师称号"
        }, {
            "id": "003",
            "name": "qizong",
            "src": "../../assets/qizong.png",
            "zhicheng": "jiangshi",
            "desc": "曾获中级教师称号"
        }, {
            "id": "001",
            "name":"zhangsan",
            "src": "../../assets/zhangsan.png",
            "zhicheng": "jiaoshou",
            "desc": "2003年至今在信息工程学院任教，带领学生参加各种赛事"
        }, {
            "id": "002",
            "name": "lisi",
            "src": "../../assets/lisi.png",
            "zhicheng": "jiangshi",
            "desc": "曾获高级教师称号"
        }, {
            "id": "003",
            "name": "qizong",
            "src": "../../assets/qizong.png",
            "zhicheng": "jiangshi",
            "desc": "曾获中级教师称号"
        }]
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
.teacher {
    /* width: 60%; */
    margin: 0 auto;
    display: inline-block;
}
.teacher_f {
    margin: 30px;
    display: inline-block;
}
.jianjie {
    display: inline-block;
}
</style>