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
            <p class="text-center">
              Copyright www.web-study.dev
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
