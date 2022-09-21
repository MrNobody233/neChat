import request from "@/ulits/request";


export const login = (username, password) => {
    return request('/login', 'post', {username: username, password: password})
}

/*

export const register = (username,password) => {
    return request('/register', 'post',{username:})
}
*/
