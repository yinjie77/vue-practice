import Vue from "vue";
import VueRouter from "vue-router";
import routes from '@/router/routes'
import store from '@/store'
Vue.use(VueRouter)
let pushOrigin = VueRouter.prototype.push
let replaceOrigin = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve = () => { }, reject = () => { }) {
    pushOrigin.call(this, location, resolve, reject)

}
VueRouter.prototype.replace = function (location, resolve = () => { }, reject = () => { }) {
    replaceOrigin.call(this, location, resolve, reject)
}
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})
router.beforeEach(async (to, from, next) => {
    // next()
    let token = store.state.User.token
    let name = store.state.User.userInfo.name
    if (token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch("getUserInfo");
                    next()
                } catch (error) {
                    await store.dispatch("userLogout");
                    next('/login')
                }

            }
        }
    } else {
        let toPath = to.path
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            next('/login?redirect=' + toPath)
        }
        next()
    }
})
export default router