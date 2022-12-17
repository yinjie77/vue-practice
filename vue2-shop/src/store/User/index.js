import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqUserLogout } from "@/api"
const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userInfo: {}
}
const actions = {
    async getCode({ commit }, phone) {
        let res = await reqGetCode(phone)
        if (res.code == 200) {
            commit("GETCODE", res.data)
            return "ok"
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userRegister({ commit }, user) {
        let res = await reqUserRegister(user)
        if (res.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogin({ commit }, data) {
        let res = await reqUserLogin(data)
        if (res.code == 200) {
            commit("USERLOGIN", res.data.token)
            localStorage.setItem("TOKEN", res.data.token)
            return "ok"
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({ commit }) {
        let res = await reqUserInfo()
        if (res.code == 200) {
            commit("GETUSERINFO", res.data)
            return "ok"
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogout({ commit }) {
        let res = await reqUserLogout()
        if (res.code == 200) {
            commit("USERLOGOUT")
            return "ok"
        } else {
            return Promise.reject(new Error('fail'))
        }
    },

}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    USERLOGOUT(state) {
        state.token = ''
        state.userInfo = {}
        localStorage.removeItem("TOKEN")
    }
}
const getters = {


}
export default {
    state,
    actions,
    mutations,
    getters
}