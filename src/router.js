import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        path: '/home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      meta: {
        title: '主界面',
        hidden: false
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
      // 需要在父页面用 router-view给子路由占位
      children: [{
        path: 'youth',
        name: 'youth',
        component: () => import(/* webpackChunkName: "youth" */ './views/article/youth/youth.vue'),
        meta: {
          title: '故乡遥',
          hidden: false
        }
      }, 
      {
        path: 'sex',
        name: 'sex',
        component: () => import(/* webpackChunkName: "sex" */ './views/article/sex/sex.vue'),
        meta: {
          title: '性',
          hidden: false
        }
      }, ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/studio',
      name: 'studio',
      component: () => import(/* webpackChunkName: "studio" */ './views/Studio.vue')
      //主要内容：一些功能，UI 的demo
    }
    ,
    {
      path: '/daily',
      name: 'daily',
      component: () => import(/* webpackChunkName: "daily" */ './views/Daily.vue')
      //主要内容：每日一图，一文，天气预报
    }
  ]
})
