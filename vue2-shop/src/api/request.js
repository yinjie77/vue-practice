import axios from "axios";
import nProgress from "nprogress";//进度条
import "nprogress/nprogress.css"
import store from '@/store'
const requests = axios.create({
    baseURL: "/api",
    timeout: 5000
})
//请求拦截器
requests.interceptors.request.use((config) => {
    //里面有headers请求头
    if (store.state.Detail.uuid_token) {
        config.headers.userTempId = store.state.Detail.uuid_token
    }
    if (store.state.User.token) {
        config.headers.token = store.state.User.token
    }
    nProgress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, () => {
    return Promise.reject(new Error('fail'))
})
export default requests