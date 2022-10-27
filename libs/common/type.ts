export interface IUserData {
  id: string
  name: string
  avatar: string
}

export interface IArticle {
  id: string
  createdTime: string
  modifyTime: string
  cover?: string
  icon?: string
  title?: string
  summary?: string
  slug?: string
  status?: string
  tags?: string[]
  type?: string[]
  category?: string
  date?: string
}
