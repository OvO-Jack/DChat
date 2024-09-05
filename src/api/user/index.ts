import request from '@/utils/request'
import type {
  loginForm,
  loginResponseData,
  registerForm,
  registerResponseData,
  responseData,
  headimgResponseData,
  updateForm,
  UserListResponse,
} from './type'

// 项目用户相关的请求地址
enum API {
  LOGIN_URL = 'user/logins',
  REGISTER_URL = 'user/register',
  USERINFO_URL = 'user/userinfo',
  HEADIMG_URL = 'user/headimg',
  UPDATE_URL = 'user/update',
  USERLIST_URL = 'user/userList',
}

// 登录
export const login = (data: loginForm): Promise<loginResponseData> =>
  request
    .post<loginResponseData>(API.LOGIN_URL, data)
    .then((response) => response.data)

// 注册
export const register = (data: registerForm): Promise<registerResponseData> =>
  request
    .post<registerResponseData>(API.REGISTER_URL, data)
    .then((response) => response.data)

// 获取用户信息
export const userinfo = (): Promise<responseData> =>
  request.get<responseData>(API.USERINFO_URL).then((response) => response.data)

// 上传用户头像
export const headimg = (formData: FormData): Promise<headimgResponseData> =>
  request
    .post<responseData>(API.HEADIMG_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data)

// 获取用户信息
export const userInfoUpdate = (data: updateForm): Promise<responseData> =>
  request
    .post<responseData>(API.UPDATE_URL, data)
    .then((response) => response.data)

//获取用户列表信息
export const getUserList = (): Promise<UserListResponse> =>
  request
    .get<UserListResponse>(API.USERLIST_URL)
    .then((response) => response.data)
