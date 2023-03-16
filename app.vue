<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-white dark:bg-dark text-gray-800 dark:text-gray-100",
  },
});
const { toggleDark, isDark } = useTheme();
</script>
