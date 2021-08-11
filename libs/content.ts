import { contentFunc, IContentDocument } from '@nuxt/content/types/content'
import { State } from '~/store'

export async function getArticle (params: {
  $content: contentFunc,
  state: State,
  category: string,
  page: string
}) {
  const { $content, state, category, page } = params
  const doc = (await $content(`${category}/${page}`).fetch()) as IContentDocument
  const [prev, next] = (await $content(category).sortBy('slug').surround(doc.slug).fetch()) as IContentDocument[]
  const title = (category === 'top' && page === 'index') ? doc.title : `${doc.title} | ${state.title}`
  const description = {
    hid: 'description',
    name: 'description',
    content: doc.description
  }
  return {
    doc,
    prev,
    next,
    title,
    description
  }
}
