import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
let $router = useRouter()
//引入接口
import {} from '@/api/user'
//引入数据类型
import type {} from '@/api/user/type'
import type { UserState } from './types/type'
let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      username: '',
      role: '',
      sex: null,
      mobile: null,
      description: null,
      updatedAt: null,
      createdAt: null,
      avatar: null,
    }
  },
  actions: {
    //用户登录
    // async userLogin(data: loginForm) {
    //     let result: loginResponseData = await userLogin(data);
    //     console.log(result);
    //     const userId = result.data.id.toString() as string;
    //     if (result.code == 200200) {
    //         this.userid = userId;
    //         SET_USERID(userId);
    //         return 'ok';
    //     } else {
    //         return Promise.reject(new Error(result.message))
    //     }
    // }
  },
  getters: {},
})

export default useUserStore
