import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
import Home from "./Home";
import Search from "./Search";
import Detail from "./Detail";
import Shopcart from "./shopcart"
import User from "./User"
import Trade from "./trade";
export default new Vuex.Store({
    modules: {
        Home,
        Search,
        Detail,
        Shopcart,
        User,
        Trade
    }
})