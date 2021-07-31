<template>
  <div class="text-gray-700">
    <div class="container mx-auto">
      <div class="flex flex-row">
        <aside class="flex-none w-64">
          <div class="fixed w-64 h-screen border-r border-gray-200">
            <a href="/" class="block py-2 px-4 hover:bg-gray-200">
              <span class="text-sm">HOME</span>
            </a>
            <div v-for="category in categories" :key="category.title">
              <div class="p-4">
                <h5>{{ category.title }}</h5>
              </div>
              <a
                v-for="(doc, index) in category.docs"
                :key="doc.path"
                :href="doc.path"
                class="block py-2 px-4 hover:bg-gray-200"
              >
                <span class="text-sm">{{ index + 1 }}. {{ doc.title }}</span>
              </a>
            </div>
          </div>
        </aside>
        <main class="flex-grow">
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { ref, useContext, useFetch } from '@nuxtjs/composition-api'
import { defineComponent } from '@vue/composition-api'

interface ContentCategory {
  title: string,
  docs: IContentDocument[]
}

export default defineComponent({
  setup () {
    const context = useContext()
    const $content = context.$content
    const fetchDocs = async (slug: string) => {
      return (await $content(slug).without(['body']).sortBy('slug').fetch()) as IContentDocument[]
    }

    const categories = ref<ContentCategory[]>([])
    useFetch(async () => {
      categories.value = [
        {
          title: 'Webサイト',
          docs: await fetchDocs('website')
        }
      ]
    })
    return {
      categories
    }
  }
})
</script>
