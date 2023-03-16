<template>
  <div>
    <main>
      <section class="flex h-hero items-center">
        <div class="flex w-full items-center justify-center lg:w-1/2">
          <div class="mx-auto max-w-lg px-5 lg:px-0">
            <div class="text-center lg:text-left">
              <NuxtLink
                to="/"
                class="mb-7 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-gray-400 ring-1 ring-gray-200 hover:text-primary dark:text-gray-400 dark:ring-gray-800 dark:hover:text-primary-400"
              >
                <Icon name="heroicons:star" size="14" />
                <span>A random promo label. Click here for more</span>
              </NuxtLink>
            </div>
            <h1
              class="text-center text-3xl font-medium lg:text-left lg:text-4xl"
            >
              Nuxt starter template
            </h1>
            <p class="mt-5 text-center opacity-60 lg:text-left lg:text-lg">
              This is a starter template for a Nuxt 3 app that use TailwindCSS,
              Prisma, VeeValidate & Yup for validation.
            </p>
            <div
              class="mt-10 flex items-center justify-center gap-4 lg:justify-start"
            >
              <NuxtLink to="/" class="btn btn-primary py-3 px-6"
                >Get started</NuxtLink
              >
              <NuxtLink to="/" class="btn btn-outline py-3 px-6"
                >Learn more</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="hidden h-hero w-full lg:block lg:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/18/21/49/singapore-1990959_1280.jpg"
            alt="Home page image"
            aria-label="Home page image"
            class="h-hero w-full object-cover"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>
