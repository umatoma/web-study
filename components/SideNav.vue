<template>
  <aside class="sm:w-64">
    <div class="sm:fixed sm:w-64 sm:h-screen sm:border-r sm:border-gray-200">
      <div class="flex justify-between">
        <a href="/" class="w-full h-10 block px-4 hover:bg-gray-200 flex items-center">
          <span class="text-sm">HOME</span>
        </a>
        <div class="w-10 h-10 flex items-center justify-center sm:hidden" @click="toggleMenuOpen">
          <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png">
        </div>
      </div>
      <div class="sm:block" :class="isMenuOpen ? '' : 'hidden'">
        <div v-for="category in categories" :key="category.title">
          <div class="p-2">
            <h5 class="font-bold">
              {{ category.title }}
            </h5>
          </div>
          <a
            v-for="(doc, index) in category.docs"
            :key="doc.path"
            :href="doc.path"
            class="block py-2 px-4 hover:bg-gray-200"
          >
            <span class="text-sm">
              {{ (index + 1).toString().padStart(2, '0') }}. {{ doc.title }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </aside>
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

    const isMenuOpen = ref<boolean>(false)
    const categories = ref<ContentCategory[]>([])
    useFetch(async () => {
      categories.value = [
        {
          title: 'Webサイト入門',
          docs: await fetchDocs('website')
        }
      ]
    })
    return {
      isMenuOpen,
      categories
    }
  },
  methods: {
    toggleMenuOpen () {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
})
</script>
