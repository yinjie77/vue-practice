import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api"
const state = {
    cartList: []
}
const actions = {
    async getCartList({ commit }) {
        let res = await reqCartList()
        if (res.code == 200) {
            commit('GETCARTLIST', res.data)
        }
    },
    async deleteCartListBySkuId({ commit }, skuId) {
        let res = await reqDeleteCartById(skuId)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let res = await reqUpdateCheckedById(skuId, isChecked)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },

    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            if (item.isChecked == 1) {
                let p = dispatch('deleteCartListBySkuId', item.skuId)
                PromiseAll.push(p)
            }

        })
        return Promise.all(PromiseAll)
    },
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
        let promiseAll = []
        state.cartList[0].cartInfoList.forEach((item) => {
            let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const mutations = {
    GETCARTLIST(state, value) {
        state.cartList = value
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },

}
export default {
    state,
    actions,
    mutations,
    getters
}