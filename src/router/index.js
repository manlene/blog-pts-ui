import Vue from 'vue'
import Router from 'vue-router'
import mavonEditor from 'mavon-editor'
import login from '@/components/login'
import home from '@/components/home'
import user from '@/components/user'
import publishArticle from '@/components/publishArticle'
import articleList from '@/components/articleList'
import tag from '@/components/tag'
import articleDetail from '@/components/articleDetail'
import editArticle from '@/components/editArticle'
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
      path: '/',
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
      path: '/articleDetail',
        meta: {
            title: '文章内容'
        },
        component: home,
        children: [
          {
            path: '',
                  name: 'articleDetail',
                  component: articleDetail,
                  meta: {
                      title:"articleDetail"
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
    },
    {
      path: '/editArticle',
        meta: {
            title: '文章编辑'
        },
        component: home,
        children: [
          {
            path: '',
                  name: 'editArticle',
                  component: editArticle,
                  meta: {
                      title:"editArticle"
                  }
          }
        ]
    }
  ]
})
