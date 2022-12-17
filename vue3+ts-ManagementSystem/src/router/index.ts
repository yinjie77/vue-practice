import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: "goods",
    component: HomeView,
    children: [
      {
        path: 'goods',
        name: 'goods',
        meta: {
          isshow: true,
          title: '商品列表'
        },
        component: () => import(/* webpackChunkName: "goods" */ '../views/GoodsView.vue')
      },
      {
        path: 'user',
        name: 'gouserods',
        meta: {
          isshow: true,
          title: '角色列表'
        },
        component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue')
      },
      {
        path: 'role',
        name: 'role',
        meta: {
          isshow: true,
          title: '用户列表'
        },
        component: () => import(/* webpackChunkName: "role" */ '../views/RoleView.vue')
      },
      {
        path: 'authority/:id/:authority',
        name: 'authority',
        meta: {
          isshow: false,
          title: '权限列表'
        },
        component: () => import(/* webpackChunkName: "authority" */ '../views/AuthorityView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})
export default router
