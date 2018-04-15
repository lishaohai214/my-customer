// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'



/**
  引入 home 组件，和 about 组件
*/ 
import Home  from './components/Home.vue'
import About from './components/About.vue'

import Add from './components/Add.vue'

import Edit from './components/Edit'

/**
  引入路由
*/ 
import VueRouter   from 'vue-router'

import VueResource from 'vue-resource' // 使用 $http 请求 

import  CustomerDetails from './components/CustomerDetails'

Vue.config.productionTip = false
/**
  配置路由 
  1.使用中间件
  2.配置路由
*/ 
Vue.use(VueRouter);
Vue.use(VueResource);  // 使用 $http 请求 


const router = new VueRouter({
  routes:[
    { path:'/', component: Home},
    { path:'/About', component: About },
    { path:'/Add', component: Add },
    { path:'/Customer/:id', component: CustomerDetails },
    { path:'/Edit/:id', component: Edit },
  ],
  mode:'history' 
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
