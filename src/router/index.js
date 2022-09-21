import Vue from 'vue'
import VueRouter from 'vue-router'

const welcome = () => import(/*webpackChunkName:"welcome"*/'@/views/welcome')
const Login = () => import(/*webpackChunkName:"Login"*/'@/views/login')
const register = () => import(/*webpackChunkName:"Register"*/'@/views/register/register')
const chat = () => import(/*webpackChunkName:"Chat"*/'@/views/chat/index')
const test = () => import(/*webpackChunkName:"test"*/'@/views/test/test')

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
        path: '/chat', component: chat
    },
    {
        path: '/test', component: test
    }
]

const router = new VueRouter({
    routes
})

export default router
