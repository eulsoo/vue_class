import Vue from 'vue' // vue 생성자 가져옴
import VueRouter from 'vue-router' // 라우터 가져옴
import NewsView from '../views/NewsView.vue' // 뉴스컴포넌트 가져옴
import AskView from '../views/AskView.vue' // 애스크컴포넌트 가져옴
import JobsView from '../views/JobsView.vue' // 잡스컴포넌트 가져옴
import UserView from '../views/UserView.vue' // 유저컴포넌트 가져옴
import ItemView from '../views/ItemView.vue' // 아이템컴포넌트 가져옴

Vue.use(VueRouter)
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/news"
    },
    {
      path: "/news",
      name: "news",
      component: NewsView
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserView
    },
    {
      path: "/item",
      name: "item",
      component: ItemView
    }
  ]
});
