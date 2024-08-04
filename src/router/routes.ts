//对外暴露配置路由(常量路由):全部用户都可以访问到的路由

import { RouteRecordRaw } from 'vue-router'
export const constantRoute: RouteRecordRaw[] = [
  {
    //登录成功以后展示数据的路由
    path: '/',
    redirect: '/home',
  },
  {
    //登录
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
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
