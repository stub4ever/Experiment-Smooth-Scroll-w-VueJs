import Vue from 'vue'
import VueRouter from 'vue-router'
import Experiment1 from '../views/Experiment1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'experiment1',
    component: Experiment1
  },
  {
    path: '/experiment2',
    name: 'Experiment2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Experiment2.vue')
  },
  {
    path: '/experiment3',
    name: 'Experiment3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Experiment3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
