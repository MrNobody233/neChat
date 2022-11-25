import Vue from 'vue'
import VueRouter from 'vue-router'

const welcome = () => import(/*webpackChunkName:"welcome"*/'@/views/welcome')
const Login = () => import(/*webpackChunkName:"Login"*/'@/views/login/login')
const register = () => import(/*webpackChunkName:"Register"*/'@/views/register/register')
const chat = () => import(/*webpackChunkName:"Chat"*/'@/views/chat/index')
const test = () => import(/*webpackChunkName:"test"*/'@/views/test/test')
const talkBox = () => import(/*webpackChunkName:"msg"*/'@/views/chat/talkBox')
const defaultBg = () => import(/*webpackChunkName:"default"*/'@/views/chat/talkBox/components/default.vue')

Vue.use(VueRouter)

const routes = [
    //   一级路由布局容器
    {
        path: '/', component: welcome
    },
    {
        path: '/Login', component: Login
    },
    {
        path: '/register', component: register
    },
    {
        path: '/chat', component: chat,

        children: [
            {path: '/', component: defaultBg},
            {path: 'msg/:id', component: talkBox}
        ]
    },
    {
        path: '/test', component: test
    }
]

const router = new VueRouter({
    routes
})

export default router
