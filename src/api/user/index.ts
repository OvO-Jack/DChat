//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type { sendResponseData } from './type'

//项目用户相关的请求地址

enum API {
  SEND_URL = 'sendSms',
}

// //校验验证码
// export const checkCode = (datas: checkCodeForm) =>
//   loginRequest.get<any, sendResponseData>(
//     `${API.CHECKCODE_URL}/${datas.phone}/${datas.code}`,
//   )
