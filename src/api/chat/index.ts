import request from '@/utils/request'
import type {
  getMessageData,
  sendMessageData,
  sendMessageParmaType,
} from './type'

enum API {
  GETMESSAGE_URL = 'chat/messages',
  SENDMESSAGE_URL = '/chat/sendMessage',
}
//查看聊天记录
export const getMessage = (
  userId: string,
  page: string = '1',
  limit: string = '10',
): Promise<getMessageData> =>
  request
    .get<getMessageData>(
      `${API.GETMESSAGE_URL}/${userId}?page=${page}&limit=${limit}`,
      {},
    )
    .then((response) => response.data)

//发送消息
export const sendMessage = (
  sendMessageParma: sendMessageParmaType,
): Promise<sendMessageData> =>
  request
    .post<sendMessageData>(API.SENDMESSAGE_URL, sendMessageParma)
    .then((response) => response.data)
