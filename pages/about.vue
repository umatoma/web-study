<template>
  <content-container
    :doc="doc"
    :prev="prev"
    :next="next"
    :show-surround="false"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { getArticle } from '~/libs/content'

interface Data {
  doc: object,
  prev?: object,
  next?: object,
  title: string,
  description: {
    hid: string,
    name: string,
    content: string
  }
}
interface Methods {}
interface Computed {}
interface Props {}

export default Vue.extend<Data, Methods, Computed, Props>({
  async asyncData ({ $content }): Promise<Data> {
    const { category, page } = { category: 'top', page: 'about' }
    const article = await getArticle({ $content, category, page })
    return { ...article }
  },
  head () {
    return {
      title: this.title,
      meta: [this.description]
    }
  }
})
</script>
