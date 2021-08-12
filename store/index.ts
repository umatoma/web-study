export interface State {
  title: string,
  categories: {
      title: string,
      directory: string
  }[],
}

export interface Mutations {}

export const state: (() => State) = () => ({
  title: '作って学ぶWebサイト制作',
  categories: [
    {
      title: 'Webサイト入門',
      directory: 'website'
    },
    {
      title: 'Webサイト実践',
      directory: 'website-practice'
    }
  ]
})

export const mutations: Mutations = {}
