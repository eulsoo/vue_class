import Vue from 'vue' // vue 생성자 가져옴
import VueRouter from 'vue-router' // 라우터 가져옴
import NewsView from '../views/NewsView.vue' // 뉴스컴포넌트 가져옴
import AskView from '../views/AskView.vue' // 잡스컴포넌트 가져옴
import JobsView from '../views/JobsView.vue' // 잡스컴포넌트 가져옴

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: NewsView
  },
  {
    path: '/News',
    name: 'News',
    component: NewsView
  },
  {
    path: '/Ask',
    name: 'Ask',
    component: AskView
  },
  {
    path: '/Jobs',
    name: 'Jobs',
    component: JobsView
  },
]

const router = new VueRouter({
  routes
})

export default router
