import request from "@/ulits/request";


// 登录
export const login = (username, password) => {
    return request(`/accounts/${username}/${password}`, 'get',)
}

// 注册
export const register = (username, password) => {
    return request('/accounts', 'post', {Username: username, Password: password})
}

// 添加好友

export const addFriend = (id) => {
    return request('/accounts/friends', 'post', {ReceiverID: id})
}