import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Shouye from '@/view/shouye/index'
import Xiaoyuanoa from '@/view/xiaoyuanoa/index'
import Lianxiwomen from '@/view/lianxiwomen/index'
import Login from '@/view/login/index'
import Xygk from '@/view/xueyuangaikuang/index'
import Szll from '@/view/shizililiang/index'
import Jyjx from '@/view/jiaoyujiaoxue/index'
import LoginSuccessAdmin from '@/view/loginsuccessadmin/index'
import LoginSuccessUser from '@/view/loginsuccessuser/index'
import AddNews from '@/view/addnews/index'
import AddRegulations from '@/view/addregulations/index'
import AddSchoolculture from '@/view/addschoolculture/index'
// import AddSchoolculture from '@/view/addschoolculture/upload'
import AddTeachers from '@/view/addteachers/index'
import AddUser from '@/view/addusers/index'
// import UploadHeader from '@/view/addteachers/components/uploadheader'
import test from '@/view/test'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Shouye',
            component: Shouye,
        }, {
            path: '/xiaoyuanoa',
            name: 'Xiaoyuanoa',
            component: Xiaoyuanoa
        }, {
            path: '/lianxiwomen',
            name: 'Lianxiwomen',
            component: Lianxiwomen
        }, {
            path: '/Login',
            name: 'Login',
            component: Login
        }, {
            path: '/xygk',
            name: 'xygk',
            component: Xygk
        }, {
            path: '/szll',
            name: 'szll',
            component: Szll
        }, {
            path: '/jyjx',
            name: 'jyjx',
            component: Jyjx
        }, {
            path: '/loginsuccessadmin',
            name: 'LoginSuccessAdmin',
            component: LoginSuccessAdmin,
        }, {
            path: '/loginsuccessuser',
            name: 'LoginSuccessUser',
            component: LoginSuccessUser
        }, {
            path: '/addnews',
            name: 'AddNews',
            component: AddNews,
        }, {
            path: '/addnews',
            name: 'AddNews',
            component: AddNews,
        }, {
            path: '/addregulations',
            name: 'AddRegulations',
            component: AddRegulations
        }, {
            path: '/addschoolculture',
            name: 'AddSchoolculture',
            component: AddSchoolculture
        }, {
            path: '/addteachers',
            name: 'AddTeachers',
            component: AddTeachers,
            // children: {
            //     path: '/uploadheader',
            //     name: 'UploadHeader',
            //     component: UploadHeader
            // }
        }, {
            path: '/addusers',
            name: 'AddUser',
            component: AddUser
        }, {
            path: '/test/:id',
            name: 'test',
            component: test
          },
    ]
})