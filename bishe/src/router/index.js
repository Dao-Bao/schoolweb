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
import LoginSuccess from '@/view/loginsuccess/index'
import AddNews from '@/view/addnews/index'
import AddRegulations from '@/view/addregulations/index'
import AddSchoolculture from '@/view/addschoolculture/index'
import AddTeachers from '@/view/addteachers/index'
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
            path: '/loginsuccess',
            name: 'LoginSuccess',
            component: LoginSuccess,
        }, {
            path: '/addnews',
            name: 'AddNews',
            component: AddNews,
        }, {
            path: '/addnews',
            name: 'AddNews',
            component: AddNews,
        },
        //  {
        //     path: '/addnews',
        //     name: 'AddNews',
        //     component: AddNews,
        // }, 
        {
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
            component: AddTeachers
        },
        {
            path: '/test/:id',
            name: 'test',
            component: test
          },
    ]
})