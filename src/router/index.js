import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import user from '@/components/user'
import menu from '@/components/menu'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/user',
        meta: {
            title: 'blog'
        },
        component: home,
        children: [
          {
            path: '',
                  name: 'user',
                  component: user,
                  meta: {
                      title:"user"
                  }
          }
        ]
    },
    {
      path: '/menu',
        meta: {
            title: 'blog'
        },
        component: home,
        children: [
          {
            path: '',
                  name: 'menu',
                  component: menu,
                  meta: {
                      title:"menu"
                  }
          }
        ]
    }
  ]
})
