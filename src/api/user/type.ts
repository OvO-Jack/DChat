//通用返回值
export interface responseData {
  code: number
  msg: string
  data?: {
    username: string
    email: string
    phone?: string
    updateAt: string
    createAt: string
    image?: string
    error?: string
  }
  time: string
}
// 登录接口需要携带参数的类型
export interface loginForm {
  account: string
  password: string
}

// 登录接口返回数据的类型
export interface loginResponseData {
  code: number
  msg: string
  data?: {
    username: string
    email: string
    phone?: string
    updateAt: string
    createAt: string
    image?: string
    token: string
  }
  time: string
}

// 登录失败的返回项的类型
export interface loginFailResponseItem {
  type: string
  msg: string
  path: string
  location: string
}

// 登录失败的返回类型
export interface loginFailResponse {
  code: number
  msg: string
  data?: object | loginFailResponseItem[]
  time: string
}

//注册接口需要携带的参数类型
export interface registerForm {
  username: string
  password1: string
  password2: string
  email: string
}

// 注册失败的返回项的类型
export interface registerFailResponseItem {
  type: string
  msg: string
  path: string
  location: string
  value: string
}
// 登录失败的返回类型
export interface registerFailResponse {
  code: number
  msg: string
  data?: object | registerFailResponseItem[]
  time: string
}
// 注册接口返回数据的类型
export interface registerResponseData {
  code: number
  msg: string
  data?: object
  time: string
}

//图片上传返回值
export interface headimgResponseData {
  code: number
  msg: string
  data?: {
    filepath?: string
    error?: string
  }
  time: string
}
//用户信息修改类型
export interface updateForm {
  username?: string
  email?: string
  phone?: string
  image?: string
}
