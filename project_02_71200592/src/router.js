import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import LogIn from './views/log-in'
import Laman1 from './views/laman1'
import Home from './views/home'
import LogIn1 from './views/log-in1'
import LogIn3 from './views/log-in3'
import LogIn2 from './views/log-in2'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'LogIn',
      path: '/log-in',
      component: LogIn,
    },
    {
      name: 'Laman1',
      path: '/laman1',
      component: Laman1,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'LogIn1',
      path: '/log-in1',
      component: LogIn1,
    },
    {
      name: 'LogIn3',
      path: '/log-in3',
      component: LogIn3,
    },
    {
      name: 'LogIn2',
      path: '/log-in2',
      component: LogIn2,
    },
  ],
})
