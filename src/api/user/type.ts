//登录接口需要携带参数ts类型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  id: number
  role: string
  username: string
  pwd: null | string
  sex: null | string
  mobile: null | string
  description: null | string
  updatedAt: null | string
  createdAt: null | string
  avatar: null | string
}

export interface loginResponseData {
  flag: boolean
  code: number
  message: string
  data: dataType
}
