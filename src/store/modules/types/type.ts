export interface UserState {
  userid?: string
  username?: string
  role?: string
  sex: null | string
  mobile: null | string
  description: null | string
  updatedAt: null | string
  createdAt: null | string
  avatar: null | string
}
export interface BlogState {
  blogInfo: {
    id: number
    title: string
    content: string
    updatedAt: string
    createdAt: string
    visitCount: null | number
    likeCount: null | number
    isLike: ''
    typeId: null | number
    userId: null | number
    tagId: null | number
    imageUrl: ''
    introduction: null | string
    tagName: ''
  }
  myBlogDatas: any
  currentBlogDatas: any
}

interface Comment {
  topLevelComment: {
    id: number
    nickname: string
    content: string
    createTime: string | null // 日期字符串或 null，根据实际情况
    blogId: number
    parentCommentId: number | null // 父评论的 ID 或 null
    admincomment: number | null // 数字或 null，根据实际情况,
    commentAvatar: ''
  }
  replyComments: {
    id: number
    nickname: string
    content: string
    createTime: string | null // 日期字符串或 null，根据实际情况
    blogId: number
    parentCommentId: number | null // 父评论的 ID 或 null
    admincomment: number | null // 数字或 null，根据实际情况
    commentAvatar: ''
  }[]
}

export interface ActionState {
  commentDatas: Comment[]
  uploadImage: ''
  searchDatas: any
}
