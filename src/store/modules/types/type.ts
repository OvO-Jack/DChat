//用户信息
export interface UserState {
  userinfo: {
    username: string
    email: string
    phone?: string
    updateAt: string
    createAt: string
    image?: string
    _id: string
  }
  variable: {
    dialogVisibleCorpper: boolean
  }
}
