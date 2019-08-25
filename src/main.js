import Vue from 'vue'


import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI);
import test from 'meizi-ui'
import 'font-awesome/css/font-awesome.css'

import animated from 'animate.css' 
import 'balloon-css';
 Vue.use(animated)


//css-doodle 背景
import  'css-doodle';

//移动了位置
import App from './App.vue'
import router from './router'

//复制到粘贴板
import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard;


import $ from 'jquery'
Vue.use(test)

Vue.config.productionTip = false


// use lodash
let _ = require('lodash')


// NProgress.configure({
//   easing: 'ease', // 动画方式    
//   speed: 500, // 递增进度条的速度    
//   showSpinner: false, // 是否显示加载ico    
//   trickleSpeed: 200, // 自动递增间隔    
//   minimum: 0.3 // 初始化时的最小百分比
// })


//路由全局守卫
//当路由进入前
router.beforeEach((to, from, next) => {
  // NProgress.start();
  if (to.matched.length === 0) { //如果未匹配到路由
    console.log("屏蔽")
    from.name ? next({
      name: from.name
    }) : next('/'); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    console.log("放行")
    next(); //如果匹配到正确跳转
  }
});
//当路由进入后：关闭进度条
router.afterEach(() => {  
  // 在即将进入新的页面组件前，关闭掉进度条
  // NProgress.done()
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')