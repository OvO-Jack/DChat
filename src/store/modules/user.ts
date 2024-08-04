import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
let $router = useRouter()
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入接口
import { userinfo } from '@/api/user'
//引入数据类型
import type { responseData } from '@/api/user/type'
import type { UserState } from './types/type'
let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      userinfo: {
        _id: '',
        email: '',
        username: '',
        phone: '',
        updateAt: '',
        createAt: '',
        image: '',
      },
      variable: {
        dialogVisibleCorpper: false,
      },
    }
  },
  actions: {
    //获取用户信息
    async userInfo() {
      let res: responseData = await userinfo()
      if (res.code == 200) {
        // 更新状态
        this.userinfo = res.data
        return '获取用户信息成功'
      } else {
        return Promise.reject(new Error(res.data.error))
      }
    },
    //退出登录
    async loginOut() {
      REMOVE_TOKEN()
      this.userinfo = {
        _id: '',
        email: '',
        username: '',
        phone: '',
        updateAt: '',
        createAt: '',
        image: '',
      }
    },
    //更改头像编辑弹窗
    dialogVisibleCorpper(status: Boolean) {
      this.variable.dialogVisibleCorpper = status
    },
    //更改用户信息
    updateUserInfo(data: object) {
      this.userinfo = { ...this.userinfo, ...data }
    },
  },
  getters: {},
})

export default useUserStore
