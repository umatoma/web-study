export interface State {
    title: string,
    categories: {
        title: string,
        directory: string
    }[]
}

export interface Mutations {}

export const state: (() => State) = () => ({
  title: '作って学ぶ、Webサイト＆Webアプリ開発',
  categories: [
    {
      title: 'Webサイト入門',
      directory: 'website'
    }
  ]
})

export const mutations: Mutations = {}
