import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './views/home.vue'
import Subject from './views/subject.vue'
import App from './App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/subject/:id',
    name: 'subject',
    component: Subject
  },
  {
    path: '/app',
    component: App
  }
]

export default new VueRouter({
  routes
})