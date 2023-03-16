<template>
  <div>
    <h1 class="mb-5 text-xl font-bold">Tables</h1>

    <section class="mt-5">
      <DataTable
        :loading="pending"
        table-class-name="dt"
        :headers="headers"
        :items="people"
      ></DataTable>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Header } from "vue3-easy-data-table";

definePageMeta({ layout: "admin", middleware: "logged-in" });
const headers: Header[] = [
  { text: "Name", value: "name", sortable: true },
  { text: "Email", value: "email" },
  { text: "Phone", value: "phone" },
  { text: "Website", value: "website" },
  { text: "Company", value: "company.name" },
];

const { data: people, pending } = await useAsyncData(
  "people",
  () => {
    return $fetch("https://jsonplaceholder.typicode.com/users");
  },
  {
    default: () => [],
  }
);
</script>

<style scoped></style>
