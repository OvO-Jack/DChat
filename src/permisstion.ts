//路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问)
import router from '@/router'
//@ts-ignore
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
//获取用户相关的小仓库内部token数据,去判断用户是否登录成功
import useUserStore from './store/modules/user'
import { GET_TOKEN } from '@/utils/token'
import pinia from './store'
const userStore = useUserStore(pinia)
//全局守卫:项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  //to:你将要访问那个路由
  //from:你从来个路由而来
  //next:路由的放行函数
  nprogress.start()
  //获取token,去判断用户登录、还是未登录
  //获取用户名字
  const token = GET_TOKEN()
  //用户登录判断
  if (token) {
    //登录成功,访问login,不能访问,指向首页
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      //登录成功访问其余路由(登录排除)
      try {
        //获取用户信息
        if (
          userStore.$state.userinfo._id &&
          userStore.$state.userinfo.username
        ) {
          next()
        } else {
          await userStore.userInfo()
          next()
        }
      } catch (error) {
        await userStore.loginOut()
        next({ path: '/login', query: { redirect: to.path } })
      }
    }
  } else {
    //用户未登录判断
    if (to.path == '/login' || to.path == '/register') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
//全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})

//第一个问题:任意路由切换实现进度条业务 ---nprogress
//第二个问题:路由鉴权(路由组件访问权限的设置)
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)

//用户未登录:可以访问login,其余六个路由不能访问(指向login)
//用户登录成功:不可以访问login[指向首页],其余的路由可以访问
