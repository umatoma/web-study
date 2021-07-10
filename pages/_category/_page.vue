<template>
  <article>
    <h1>{{ doc.title }}</h1>
    <nuxt-content :document="doc" />
  </article>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { defineComponent, ref, useContext, useFetch, useMeta, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const context = useContext()
    const route = useRoute()

    const $content = context.$content
    const { category, page } = route.value.params

    const doc = ref<IContentDocument>()
    useMeta(() => ({ title: doc.value?.title }))
    useFetch(async () => {
      doc.value = (await $content(category, page).fetch()) as IContentDocument
    })

    return { doc }
  },
  head: {}
})
</script>
