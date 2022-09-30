import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MenuView from '@/views/MenuView.vue'
import AugustView from '@/views/AugustView.vue'
import RegisterView from '@/layout/RegisterView.vue'
import LoginView from '@/layout/LoginView.vue'
import AdminView from '@/layout/HomeView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path:'/',
        name:'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
        path: '/august',
        name: 'august',
        component: AugustView
      }
      ,
      {
        path: '/menu',
        name: 'menu',
        component: MenuView
      },
    ]
  },
  {
    path:'/login',
    name:'login',
    component:LoginView
  },
  {
    path:'/register',
    name:'register',
    component:RegisterView

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
