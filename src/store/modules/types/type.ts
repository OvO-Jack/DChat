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
    imServiceId?: string
    deviceId?: string
  }
  variable: {
    dialogVisibleCorpper: boolean
  }
}
//聊天信息
export interface ChatState {
  badgeState: object
}
