<template>
  <div class="text-gray-700">
    <div class="container mx-auto">
      <div class="flex flex-col sm:flex-row">
        <side-nav class="flex-none" />
        <div class="flex-grow">
          <main>
            <Nuxt />
          </main>
          <footer class="p-8 bg-green-500 text-white sm:mr-64">
            <div class="flex flex-row gap-4 justify-center">
              <a href="/about">
                About
              </a>
              <a href="https://twitter.com/_umatoma">
                Twitter
              </a>
              <a href="https://zenn.dev/umatoma/books">
                Zenn
              </a>
            </div>
            <div class="text-center pt-8">
              <h5 class="font-bold">
                関連サイト
              </h5>
              <div class="pt-2 text-center">
                <a href="https://www.flutter-study.dev">
                  <img src="/images/banner-flutter.png" class="inline rounded-md">
                </a>
              </div>
            </div>
            <div class="text-center text-xs pt-8">
              <p>Copyright 作って学ぶWebサイト制作</p>
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
