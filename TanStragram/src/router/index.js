import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Fookbest from '@/pages/Fookbest'
import ContactPage from '@/pages/ContactPage'
import Profile from '@/pages/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Fookbest',
      component: Fookbest
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
  ]
})
