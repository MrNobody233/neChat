import axios from 'axios'
import store from "@/store";
import router from "@/router";

// export const baseURL = 'http://192.168.255.48:25566/api'
export const baseURL = 'http://127.0.0.1:25566/api'


const instance = axios.create({
    // axios 的一些配置  baseURL timeout
    baseURL: baseURL,
    timeout: 3000
})

// 拦截器
instance.interceptors.request.use(config => {
    // 获取 token
    const {token} = store.state.user.userInfo
    // 判断是否有 token
    console.log(token)
    if (token) {
        // 如果有token 设置token
        // config.headers.Authorization = token
        config.headers['x-Token'] = token
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// res => res.data 取出data数据，将来调用接口的时候直接拿到的就是后台数据
instance.interceptors.response.use(res => res.data, err => {
    // 401 状态码 进入该函数
    if (err.response && err.response.status === 401) {
        // 1.清空无效用户信息
        store.commit('user/setUser', {})
        // 2.跳转到登录页面
        // 3.跳转需要传参（当前路由地址）给登录页面
        // 缺少参数的当前路由地址：$route.path
        // 完成的路由地址：$route.fullPath
        // 在js模块中: router.currentRoute.value.fullPath 就是当前路由地址
        // encodeURIComponent 转码 防止解析出问题
        // const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        // router.push('/login?redirectUrl=' + fullPath)
        router.push('/login')

    }

    return Promise.reject(err)
})

export default (url, method, submitData) => {
    // 负责发请求：请求地址,请求方式，提交的数据

    return instance({
        url,
        method,
        // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
        // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}
