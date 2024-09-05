//通用返回值
export interface getMessageData {
  code: number
  msg: string
  data: tableData[]
  time: string
}

export interface tableData {
  _id: string
  conversationId: string
  senderId: string
  receiverId: string
  message: string
  timestamp: string
  status: string
  __v?: number
}

export interface sendMessageData {
  code: number
  msg: string
  data: sendMessageDataItem
  time: string
}

export interface sendMessageDataItem {
  conversationId: string
  senderId: string
  receiverId: string
  senderUsername: string
  receiverUsername: string
  message: string
  timestamp: string
  status: string
  _id: string
  __v: 0
}

export interface sendMessageParmaType {
  receiverId: string
  message: string
  receiverDeviceId: string
}
