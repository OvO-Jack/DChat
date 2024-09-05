//对外暴露配置路由(常量路由):全部用户都可以访问到的路由

import { RouteRecordRaw } from 'vue-router'
export const constantRoute: RouteRecordRaw[] = [
  {
    //登录成功以后展示数据的路由
    path: '/',
    redirect: '/home/chat/defaultRoom',
  },
  {
    //登录
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    children: [
      {
        path: '',
        redirect: 'chat',
      },
      {
        path: 'chat',
        component: () => import('@/views/home/chat/index.vue'),
        name: 'chat',
        children: [
          {
            path: '',
            redirect: 'defaultRoom',
          },
          {
            path: 'defaultRoom',
            component: () => import('@/views/home/chat/chatroom/default.vue'),
            name: 'defaultRoom',
          },
          {
            path: 'chatroom/:userId',
            component: () => import('@/views/home/chat/chatroom/index.vue'),
            name: 'chatroom',
          },
        ],
      },
      {
        path: 'people',
        component: () => import('@/views/home/people/index.vue'),
        name: 'people',
      },
    ],
  },
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    //登录
    path: '/register',
    component: () => import('@/views/register/index.vue'),
    name: 'register',
  },
]

//任意路由
export const anyRoute = {
  //任意路由
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
    icon: 'DataLine',
  },
}
