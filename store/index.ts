export interface State {
    title: string,
    categories: {
        title: string,
        directory: string
    }[],
    footerLinks: {
      title: string,
      url: string
  }[]
}

export interface Mutations {}

export const state: (() => State) = () => ({
  title: '作って学ぶ、Webサイト＆Webアプリ開発',
  categories: [
    {
      title: 'Webサイト入門',
      directory: 'website'
    },
    {
      title: 'Webサイト実践',
      directory: 'website-practice'
    }
  ],
  footerLinks: [
    {
      title: 'このサイトについて',
      url: '/about'
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/_umatoma'
    },
    {
      title: 'Zenn',
      url: 'https://zenn.dev/umatoma/books'
    },
    {
      title: 'flutter-study.dev',
      url: 'https://www.flutter-study.dev/'
    }
  ]
})

export const mutations: Mutations = {}
