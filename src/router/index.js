import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PersonalCenter from "../views/PersonalCenter";
import PersonalSettings from "../views/personal/PersonalSettings";

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: '云图' } },
  { path: '/personal-center', name: 'PersonalCenter', component: PersonalCenter, meta: { title: '个人中心' }, children: [
      { path: 'settings', name: 'PersonalSettings', component:PersonalSettings, meta: { title: '个人设置' } }
    ] }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
