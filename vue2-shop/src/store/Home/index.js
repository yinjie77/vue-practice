import { reqcategoryList, reqGetBannerList, reqFloorList } from "@/api"
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const actions = {
    async categoryList({ commit }) {
        let res = await reqcategoryList()
        commit('CATEGORYLIST', res.data.slice(0, 16))//新数据为17个，不改样式
    },

    async getBannerList({ commit }) {
        let res = await reqGetBannerList()
        if (res.code == 200) {
            commit('GETBANNERLIST', res.data)
        }
    },
    async getFloorList({ commit }) {
        let res = await reqFloorList()
        if (res.code == 200) {
            commit('GETFLOORLIST', res.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, value) {
        state.categoryList = value
    },
    GETBANNERLIST(state, value) {
        state.bannerList = value
    },
    GETFLOORLIST(state, value) {
        state.floorList = value
    }
}
const getters = {}
export default {
    state,
    actions,
    mutations,
    getters
}