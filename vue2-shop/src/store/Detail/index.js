import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api"
import { getUUID } from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    uuid_token: getUUID()
}
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let res = await reqGoodsInfo(skuId)
        commit('GETGOODINFO', res.data)
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let res = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (res.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
}
const mutations = {
    GETGOODINFO(state, value) {
        state.goodInfo = value
    }
}
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}