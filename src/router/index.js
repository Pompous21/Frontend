import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '云图' }
  },
  // {
  //   path: '/header',
  //   name: 'Header',
  //   component: Header,
  //   mata: { title: '首部' }
  // },
  // { path: '/main', name: 'Main', component: Main, mata: { title: '躯干' } },
  // { path: '/footer', name: 'Footer', component: Footer, mata: { title: '尾部' } },
  // { path: '/left-entry', name: 'LeftEntry', component: LeftEntry, mata: { title: '左侧入口' } },
  // { path: '/center-search', name: 'CenterSearch', component: CenterSearch, mata: { title: '中部搜索' } },
  // { path: '/right-entry', name: 'RightEntry', component: RightEntry, mata: { title: '右侧入口' } },






  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
