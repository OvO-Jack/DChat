import { defineStore } from 'pinia'

// 定义状态接口
interface ChatState {
  badgeState: Record<string, number>
}

// 定义store
export const useChatStore = defineStore('Chat', {
  state: (): ChatState => ({
    badgeState: {}, // 用于存储每个路径的小红点状态
  }),
  actions: {
    // 设置指定路径的小红点状态
    setBadge(path: string, value: number) {
      this.badgeState[path] = value
      this.updateParentPath(path)
    },
    // 清除指定路径的小红点状态
    clearBadge(path: string) {
      this.setBadge(path, 0)
    },
    // 更新父路径的状态总和
    updateParentPath(path: string) {
      const segments = path.split('.')
      let currentPath = ''

      segments.forEach((segment, index) => {
        currentPath = index === 0 ? segment : `${currentPath}.${segment}`

        if (index < segments.length - 1) {
          this.badgeState[currentPath] = Object.keys(this.badgeState)
            .filter((key) => key.startsWith(`${currentPath}.`))
            .reduce((total, key) => total + (this.badgeState[key] || 0), 0)
        }
      })
    },
  },
  getters: {
    // 获取指定路径的小红点状态
    getBadgeState: (state) => (path: string) => {
      return state.badgeState[path] || 0
    },
    // 递归获取某路径及其所有子路径的总和
    getChildBadgeSum: (state) => (path: string) => {
      return Object.keys(state.badgeState)
        .filter((key) => key.startsWith(`${path}.`))
        .reduce((sum, key) => sum + (state.badgeState[key] || 0), 0)
    },
  },
})
