<template>
  <div>
    <h1 class="mb-5 text-xl font-bold">Tooltip</h1>
    <section class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-tooltip="{
          content: 'Some random text',
          placement: t,
        }"
        class="cursor-pointer rounded-md border p-3 dark:border-gray-800"
        v-for="t in tips"
        :key="t"
      >
        Some tooltip text at position
        <span class="text-primary">
          {{ t }}
        </span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "logged-in" });
const tips = [
  "auto",
  "auto-start",
  "auto-end",
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
];
</script>

<style scoped></style>
