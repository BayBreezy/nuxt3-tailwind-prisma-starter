<template>
  <div>
    <h1 class="mb-5 text-xl font-bold">Forms</h1>

    <section
      class="mt-5 grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
    >
      <div>
        <FormInput
          name="normal"
          label="Normal input"
          hint="Hint for normal text"
          id="normal"
        />
      </div>
      <div>
        <FormSelect
          name="select"
          label="Select input"
          hint="Select input with primitive values"
          :items="normalSelect"
        />
      </div>
      <div>
        <FormSelect
          name="select_object"
          label="Select input"
          hint="Select input with object array"
          :items="objectSelects"
          labelVal="name"
          keyVal="id"
          v-model="selectedObject"
        />
      </div>
      <div>
        <FormAutocomplete
          name="autocomplete_object"
          label="Autocomplete input"
          hint="Autocomplete input with object array"
          :items="objectSelects"
          labelVal="name"
          keyVal="id"
        />
      </div>
      <div>
        <FormAutocomplete
          name="autocomplete"
          label="Autocomplete primitives"
          hint="Autocomplete input with string array"
          :items="normalSelect"
        />
      </div>
      <div>
        <label class="label" for="switch">Switch input</label>
        <FormSwitch name="switch" id="switch" v-model="normalSwitch" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "logged-in" });

const normalSelect = [
  "VueJS",
  "React",
  "Angular",
  "Svelte",
  "Lit",
  "Solid",
  "Ember",
  "Preact",
];

const objectSelects = [
  { id: 1, name: "VueJS" },
  { id: 2, name: "React" },
  { id: 3, name: "Angular" },
  { id: 4, name: "Svelte" },
  { id: 5, name: "Lit" },
  { id: 6, name: "Solid" },
  { id: 7, name: "Ember" },
  { id: 8, name: "Preact" },
];

const selectedObject = ref(1);
const normalSwitch = ref(true);
</script>

<style scoped></style>
