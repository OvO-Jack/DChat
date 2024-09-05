import { defineStore } from 'pinia'
import io from 'socket.io-client'
import useUserStore from '@/store/modules/user'

export const useWebSocketStore = defineStore('websocket', {
  state: () => ({
    socket: null,
    messages: {},
    isConnected: false,
    readStatus: {},
    activeConnectId: '',
  }),

  actions: {
    // 建立 WebSocket 连接
    connect() {
      const userStore = useUserStore()
      const { _id: userId, deviceId, imServiceId } = userStore.userinfo

      if (!this.socket) {
        this.socket = io('http://localhost:3000')
      }

      this.socket.on('connect', () => {
        this.isConnected = true

        // 通知服务器用户上线
        this.socket.emit('online', { userId, deviceId, imServiceId })
      })

      // 监听私聊消息
      this.socket.on('reply_private_chat', (msg: any) => {
        const senderId = msg.senderId
        console.log(msg)

        // 初始化或追加消息
        if (!this.messages[senderId]) {
          this.messages[senderId] = []
        }
        this.messages[senderId].push(msg)
      })

      this.socket.on('disconnect', () => {
        console.log('Disconnected from WebSocket server')
        this.isConnected = false
      })

      //已读消息
      this.socket.on('message_read', (data) => {
        console.log(
          'websocket接收到消息已读，更改pinia里面的信息，接受信息委：',
          data,
        )
        // 更新，标记消息为已读
        if (!this.readStatus[data.receiverId]) {
          this.readStatus[data.receiverId] = false
        }
        this.readStatus[data.receiverId] = true
      })
    },

    // 发送消息
    sendMessage(messageData: any): Promise<any> {
      return new Promise((resolve, reject) => {
        if (this.socket) {
          this.socket.emit('private_chat', messageData, (response: any) => {
            if (response) {
              const receiverId = messageData.receiverId
              if (!this.messages[receiverId]) {
                this.messages[receiverId] = []
              }
              this.messages[receiverId].push(response)
              resolve(response)
            } else {
              reject(new Error('发送消息失败'))
            }
          })
        } else {
          reject(new Error('WebSocket 未连接，请检查网络'))
        }
      })
    },

    // 清空指定用户或群组的消息列表
    clearMessages(id: string) {
      if (this.messages[id]) {
        this.messages[id] = []
      }
    },

    // 关闭 WebSocket 连接
    disconnect() {
      if (this.socket) {
        this.socket.disconnect()
        this.socket = null
        this.isConnected = false
      }
    },

    //在线通知对方信息已读
    markRead(data) {
      if (this.socket && this.isConnected) {
        this.socket.emit('mark_as_read', data, (response) => {
          console.log('markRead response:', response)
        })
      } else {
        console.error('WebSocket is not connected.')
      }
    },
  },

  getters: {
    // 获取指定用户或群组的未读消息数量
    unreadMessageCount:
      (state) =>
      (id: string): number => {
        if (state.messages[id]) {
          return state.messages[id].filter((msg) => msg.status === 'SENT')
            .length
        }
        return 0
      },
  },
})

export default useWebSocketStore
