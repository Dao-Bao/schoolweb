<template>
		<el-container>
			<top></top><br>

			<el-main>
				<div v-for="(item,index) in teacher" :key="index" class="teacher">
					<div class="teacher_f">
						<div class="jianjie">
								<img :src="item.teacherheadersrc">
								<div>{{item.teachername}}</div>
								<span>{{item.teachersex}}</span>
								<div>{{item.teacherdesc}}</div>
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
            "id": "",
            "teachername":"",
            "teachersex": "",
            "teacherheadersrc": "",
            "teacherdesc": ""
        }]
      }
    },
    methods: {
        getTeacher() {
            this.$axios.get("http://127.0.0.1:8990/findteachers", {})
				.then(this.getTeacherSucc)
        },
        getTeacherSucc(res) {
            console.log(res.data);
            this.teacher = res.data;
        }
    },
    mounted() {
        this.getTeacher()
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