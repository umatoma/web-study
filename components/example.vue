<template>
  <div class="border rounded p-4 my-6">
    <div class="slot hidden">
      <slot />
    </div>
    <iframe :srcdoc="srcdoc" :height="height" width="100%" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    height: {
      type: String,
      default: '64px'
    }
  },
  data () {
    return { srcdoc: '' }
  },
  mounted () {
    const slotHTML = this.$el.querySelector('.slot')?.innerHTML
    const html = [
      '<!DOCTYPE html>',
      '<html lang="ja">',
      '<head>',
      '    <meta charset="UTF-8">',
      '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '    <style>body{margin:0px;}</style>',
      '</head>',
      '<body>',
      `    ${slotHTML}`,
      '</body>',
      '</html>'
    ].join('')
    this.srcdoc = html
  }
})
</script>
