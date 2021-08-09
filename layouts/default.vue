<template>
  <div class="text-gray-700">
    <div class="container mx-auto">
      <div class="flex flex-col sm:flex-row">
        <side-nav class="flex-none" />
        <div class="flex-grow">
          <main>
            <Nuxt />
          </main>
          <footer class="p-4 bg-green-500 text-white sm:mr-64">
            <ul class="flex flex-col items-center p-4">
              <li v-for="link in footerLinks" :key="link.url" class="py-1">
                <a :href="link.url">{{ link.title }}</a>
              </li>
            </ul>
            <div class="text-center text-xs p-4">
              <p>Copyright {{ title }}</p>
              <p>
                <a href="https://icons8.com">Icons by Icons8</a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore } from '@nuxtjs/composition-api'
import { State } from '~/store'

export default defineComponent({
  setup () {
    const store = useStore<State>()

    return {
      title: store.state.title,
      footerLinks: store.state.footerLinks
    }
  }
})
</script>
