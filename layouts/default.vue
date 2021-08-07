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
              <li>
                <a href="/about">このサイトについて</a>
              </li>
            </ul>
            <p class="text-center text-xs p-4">
              Copyright {{ title }}
            </p>
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
      title: store.state.title
    }
  }
})
</script>
