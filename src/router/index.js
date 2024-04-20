import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import MySupportsView from '../views/supports/MySupportsView.vue'
import ModulesAndLessonsView from '../views/modules/ModulesAndLessonsView.vue'
import AuthView from '../views/auth/AuthView.vue'
import ForgetPasswordView from '../views/auth/ForgetPasswordView.vue'

const routes = [
  {
    path: '/campus',
    component: () => import('@/layouts/campus/DefaultTemplate.vue'),
    children: [
      {
        path: 'modulos',
        name: 'campus.modules',
        component: ModulesAndLessonsView
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupportsView
      },
      {
        path: '',
        name: 'campus.home',
        component: HomeView
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/auth/DefaultTemplate.vue'),
    children: [
      {
        path: '',
        name: 'auth',
        component: AuthView
      },
      {
        path: '/recuperar-senha',
        name: 'forget.password',
        component: ForgetPasswordView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
