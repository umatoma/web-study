<template>
  <div class="flex flex-row">
    <div class="flex-none w-64 order-last">
      <div class="fixed w-64 h-screen border-l border-gray-200">
        <div class="p-4">
          <h5>CONTENTS</h5>
        </div>
        <div v-for="content of contents" :key="content.id">
          <a :href="`#${content.id}`" class="block py-2 px-4 hover:bg-gray-200">
            <span class="text-sm">{{ content.text }}</span>
          </a>
        </div>
      </div>
    </div>
    <article class="flex-grow">
      <div class="p-4">
        <h1 class="text-3xl font-bold">
          {{ doc.title }}
        </h1>
      </div>
      <div class="p-4">
        <nuxt-content :document="doc" />
      </div>
    </article>
  </div>
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

    const doc = ref<IContentDocument>({} as IContentDocument)
    useMeta(() => ({ title: doc.value?.title }))
    useFetch(async () => {
      doc.value = (await $content(category, page).fetch()) as IContentDocument
    })

    return { doc }
  },
  head: {},
  computed: {
    contents () {
      const toc = (this.doc.toc ?? []) as { depth: number }[]
      return toc.filter(c => c.depth === 2)
    }
  }
})
</script>

<style lang="css">
  .nuxt-content h2 {
    margin-top: 4rem;
    margin-bottom: 1rem;
    padding-left: 0.5rem;

    font-size: 1.875rem;
    line-height: 2.25rem;

    font-weight: 700;

    border-left-width: 8px;
    --tw-border-opacity: 1;
    border-color: rgba(16, 185, 129, var(--tw-border-opacity));
  }
  .nuxt-content h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;

    font-weight: 700;

    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }
  .nuxt-content p {
    padding-bottom: 1rem;
  }
  .nuxt-content ul {
    list-style-type: disc;
    list-style-position: inside;

    padding-bottom: 1rem;
  }
  .nuxt-content ul > li > ul {
    padding-left: 1rem;
    padding-bottom: 0.5rem;
  }
  .nuxt-content a {
    text-decoration: underline;
  }
  .nuxt-content img {
    border-width: 1px;
    border-radius: 4px;

    --tw-border-opacity: 1;
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  }
  .nuxt-content .nuxt-content-highlight {
    padding-bottom: 1rem;
    position: relative;
  }
  .nuxt-content .nuxt-content-highlight pre {
    border-radius: 4px;
  }
  .nuxt-content .nuxt-content-highlight .filename {
    position: absolute;
    right: 0;
    top: 0;
    --tw-text-opacity: 1;
    color: rgba(229, 231, 235, var(--tw-text-opacity));
    z-index: 10;
    margin-right: 1rem;
    margin-top: .75rem;
  }
</style>
