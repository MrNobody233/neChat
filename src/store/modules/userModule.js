// 购物车模块
export default {
    namespaced: true,
    state() {
        return {
            // 用户信息
            userInfo: {}
        }
    },
    mutations: {
        // 修改用户信息 payload就是用户信息对象
        setUser(state, userinfo) {
            state.userInfo = userinfo
        }
    }
}