<template>
  <main-container :title="title">
    <template #main>
      HELLO
    </template>
    <template #nav>
      HELLO
    </template>
  </main-container>
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
