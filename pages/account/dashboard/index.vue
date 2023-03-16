<template>
  <div>
    <h1 class="mb-5 text-xl font-bold">Dashboard</h1>
    <p>Welcome back {{ user?.username }}</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "logged-in" });
const user = useUser();
</script>

<style scoped></style>
