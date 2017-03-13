import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import PostIndex from '@/components/post/Index'
import PostShow from '@/components/post/Show'
import PostNew from '@/components/post/New'
import UserRegister from '@/components/user/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/post',
      name: 'Post.index',
      component: PostIndex,
      meta: { requireAuth: true }
    },
    {
      path: '/post/:post_id',
      name: 'Post.index',
      component: PostShow,
      meta: { requireAuth: true }
    },
    {
      path: '/post',
      name: 'Post.index',
      component: PostNew,
      meta: { requireAuth: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: UserRegister
    }
  ]
})
