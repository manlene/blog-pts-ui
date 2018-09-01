import Vue from 'vue'
import Router from 'vue-router'
import mavonEditor from 'mavon-editor'
import login from '@/components/login'
import home from '@/components/home'
import user from '@/components/user'
import menu from '@/components/menu'
import publishArticle from '@/components/publishArticle'
import articleList from '@/components/articleList'
import tag from '@/components/tag'

Vue.use(mavonEditor)
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
    },
    {
      path: '/publishArticle',
        meta: {
            title: 'blog'
        },
        component: home,
        children: [
          {
            path: '',
                  name: 'publishArticle',
                  component: publishArticle,
                  meta: {
                      title:"publishArticle"
                  }
          }
        ]
    },
    {
      path: '/articleList',
        meta: {
            title: '文章管理'
        },
        component: home,
        children: [
          {
            path: '',
                  name: 'articleList',
                  component: articleList,
                  meta: {
                      title:"articleList"
                  }
          }
        ]
    },
    {
      path: '/tag',
        meta: {
            title: '标签管理'
        },
        component: home,
        children: [
          {
            path: '',
                  name: 'tag',
                  component: tag,
                  meta: {
                      title:"tag"
                  }
          }
        ]
    }
  ]
})
