<template>
  <div class="flex flex-col">
    <header>
      <div class="container mx-auto px-4">
        <div class="flex flex-row items-center gap-2 p-2">
          <img class="h-8 w-8" src="/images/logo.png">
          <h5>web-study.dev</h5>
        </div>
      </div>
    </header>
    <section class="py-32">
      <div class="container mx-auto px-4">
        <h5 class="text-2xl text-center font-bold leading-relaxed sm:text-5xl sm:leading-relaxed">
          「Webサイトを作りたい」<br>
          と思っているあなたへ
        </h5>
        <p class="py-4 text-center text-gray-500">
          作って学ぶWebサイト制作<br>
          <img class="h-4 w-4 inline-block" src="/images/logo.png"> web-study.dev
        </p>
        <div class="py-16 text-center">
          <a href="/website/web-about" class="py-4 px-16 rounded text-white bg-green-500 hover:bg-green-700">
            はじめる
          </a>
        </div>
      </div>
    </section>
    <section class="py-16 bg-green-50">
      <div class="container mx-auto px-4">
        <h5 class="text-xl text-center font-bold leading-relaxed sm:text-3xl">
          学びたいのは、作り方
        </h5>
        <p class="py-4 text-sm text-center text-gray-500">
          このサイトでは、HTML・CSS・JavaScriptを使った、<br class="hidden sm:inline">
          Webサイトの作り方を学べるコンテンツを公開しています。<br>
          <br>
          実際に手を動かしながらWebサイトを作り、学習を進めます。<br class="hidden sm:inline">
          もう、HTML・CSS・JavaScriptのつまらない話はやめにしましょう。
        </p>
        <img src="/images/top/top-study.png" class="mx-auto py-4">
      </div>
    </section>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h5 class="text-xl text-center font-bold leading-relaxed sm:text-3xl">
          学び方で、悩まない
        </h5>
        <p class="py-4 text-sm text-center text-gray-500">
          順番にページを読み進めるだけでOK。<br class="hidden sm:inline">
          入門・実践・応用と、順番にステップアップしていきます。
        </p>
        <img src="/images/top/top-steps.png" class="mx-auto py-4">
      </div>
    </section>
    <section class="py-16 bg-green-50">
      <div class="container mx-auto px-4">
        <h5 class="text-xl text-center font-bold leading-relaxed sm:text-3xl">
          現役エンジニアが運営
        </h5>
        <p class="py-4 text-sm text-center text-gray-500">
          現役エンジニアが個人で運営している、無料のWebサイトです。<br class="hidden sm:inline">
          実際の開発経験に基づいた、Webサイト制作に必要な知識をまとめています。
        </p>
      </div>
    </section>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h5 class="text-xl text-center font-bold leading-relaxed sm:text-3xl">
          作りたいから、作れるに
        </h5>
        <p class="py-4 text-sm text-center text-gray-500">
          初心者でも独学で、挫折せずに学べること。<br class="hidden sm:inline">
          そして、作りたいと思ったものが 「作れる」ようになること。<br>
          <br>
          Webサイトを作りたい人が、イメージを形にできるように、<br class="hidden sm:inline">
          こんな思いをこの「作って学ぶWebサイト制作」に込めています。<br>
          <br>
          作り方を学びたい方、過去に挫折してしまった方、<br class="hidden sm:inline">
          Webサイトを作りたい全ての方が対象です。
        </p>
      </div>
    </section>
    <section class="py-16 bg-green-50">
      <div class="container mx-auto px-4">
        <h5 class="text-xl text-center font-bold leading-relaxed sm:text-3xl">
          さっそく始めよう
        </h5>
        <p class="py-4 text-sm text-center text-gray-500">
          さぁ、Webサイト制作を始めてみましょう。
        </p>
        <div class="py-16 text-center">
          <a href="/website/web-about" class="py-4 px-16 rounded text-white bg-green-500 hover:bg-green-700">
            はじめる
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'plain'
})
</script>
