<template>
  <main-container :title="doc.title">
    <template #main>
      <nuxt-content :document="doc" />
      <template v-if="showSurround && (prev || next)">
        <div class="flex flex-col sm:flex-row justify-between gap-8 pt-8">
          <div class="flex-1">
            <a v-if="prev" :href="prev.path" class="block w-full border border-gray-200 hover:bg-gray-200">
              <div class="flex flex-row items-center">
                <div class="flex-none p-2">
                  <img class="w-8 h-8" src="https://img.icons8.com/ios/50/000000/left--v1.png">
                </div>
                <p class="flex-grow p-2 text-center">{{ prev.title }}</p>
              </div>
            </a>
          </div>
          <div class="flex-1">
            <a v-if="next" :href="next.path" class="block w-full border border-gray-200 hover:bg-gray-200">
              <div class="flex flex-row items-center">
                <p class="flex-grow p-2 text-center">{{ next.title }}</p>
                <div class="flex-none p-2">
                  <img class="w-8 h-8" src="https://img.icons8.com/ios/50/000000/right--v1.png">
                </div>
              </div>
            </a>
          </div>
        </div>
      </template>
    </template>
    <template #nav>
      <div>
        <h5 class="font-bold p-4">
          目次
        </h5>
        <div v-for="content of contents" :key="content.id">
          <a :href="`#${content.id}`" class="block py-2 px-4 hover:bg-gray-200">
            <span class="text-xs">{{ content.text }}</span>
          </a>
        </div>
      </div>
      <div>
        <h5 class="font-bold p-4">
          関連サイト
        </h5>
        <a href="https://www.flutter-study.dev" class="block px-4 pb-4">
          <img class="max-h-24" src="/images/banner-flutter.png">
        </a>
      </div>
    </template>
  </main-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    doc: {
      type: Object,
      required: true
    },
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    },
    showSurround: {
      type: Boolean,
      default: true
    }
  },
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
    margin-top: 3rem;
    margin-bottom: 1rem;
    padding-left: 0.5rem;

    font-size: 1.5rem;
    line-height: 2rem;

    font-weight: 700;

    border-left-width: 8px;
    border-color: rgb(16, 185, 129);
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
  .nuxt-content ol {
    list-style-type: decimal;
    list-style-position: inside;

    padding-bottom: 1rem;
  }
  .nuxt-content ul > li > ul, .nuxt-content ol > li > ol {
    padding-left: 1rem;
    padding-bottom: 0.5rem;
  }
  .nuxt-content a {
    text-decoration: underline;
  }
  .nuxt-content .nuxt-content-highlight {
    padding-bottom: 1rem;
    position: relative;
    font-size: 0.75em;
  }
  .nuxt-content .nuxt-content-highlight pre {
    border-radius: 4px;
  }
  .nuxt-content .nuxt-content-highlight .filename {
    position: absolute;
    right: 0;
    top: 0;
    color: rgb(229, 231, 235, var(--tw-text-opacity));
    z-index: 10;
    margin-right: 1rem;
    margin-top: .75rem;
  }
  .nuxt-content table {
    border-width: 1px;
    border-color: rgb(229, 231, 235);
    margin-bottom: 1rem;
  }
  .nuxt-content table th, table td {
    padding: 0.25rem 0.5rem;
  }

  .nuxt-content .link-button a {
    padding: 0.5rem 2rem;
    text-decoration: none;
    display: inline-block;
    color: rgb(255, 255, 255);
    background-color: rgb(16, 185, 129);
  }
</style>
