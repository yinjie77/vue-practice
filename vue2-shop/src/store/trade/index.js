import { reqAddressinfo, reqOrderInfo } from "@/api"

const state = {
    address: [],
    orderInfo: {}
}
const actions = {
    async getUserAddress({ commit }) {
        let res = await reqAddressinfo()
        if (res.code == 200) {
            commit('GETUSERADDRESS', res.data)
        }

    },
    async getOrderInfo({ commit }) {
        let res = await reqOrderInfo()
        if (res.code == 200) {
            commit('GETORDERINFO', res.data)
        }
    },

}
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo
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