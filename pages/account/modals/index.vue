<template>
  <div>
    <h1 class="mb-5 text-xl font-bold">Modals</h1>

    <div class="flex flex-wrap items-center gap-3">
      <button @click="modal = true" class="btn btn-primary">Show modal</button>

      <!-- Drawer modal:default -->
      <button @click="drawer = true" class="btn btn-primary">
        Show drawer
      </button>
      <!-- Drawer modal:right -->
      <button @click="drawerright = true" class="btn btn-primary">
        Show right drawer
      </button>
      <!-- Drawer modal:top -->
      <button @click="drawertop = true" class="btn btn-primary">
        Show top drawer
      </button>
      <!-- Drawer modal:bottom -->
      <button @click="drawerbottom = true" class="btn btn-primary">
        Show bottom drawer
      </button>
    </div>
    <Modal
      overlay-class="bg-dark/20 backdrop-blur fixed inset-0"
      panel-class="w-full lg:w-[450px] bg-white dark:bg-gray-900 rounded-lg shadow-lg"
      v-model="modal"
    >
      <div class="p-5">
        <h1 class="text-xl font-semibold">Just a test modal</h1>
        <p class="mt-2">Would you like to see some cats?</p>
        <div class="mt-4 flex items-center gap-3">
          <button @click="modal = false" class="btn btn-outline px-5">
            No
          </button>
          <button @click="modal = false" class="btn btn-primary">
            Yes, show me cats
          </button>
        </div>
      </div>
    </Modal>

    <!-- Default drawer -->
    <NavDrawer v-model="drawer">
      <div class="h-screen overflow-y-auto">
        <p class="sticky top-0 p-5">Left Draw</p>
        <div class="h-[1000px]"></div></div
    ></NavDrawer>
    <!-- right drawer -->
    <NavDrawer
      container-class="flex min-h-full justify-end"
      :panel-transition-props="{
        enter: 'transform transition ease-in-out duration-500',
        enterFrom: 'translate-x-full',
        leave: 'transform transition ease-in-out duration-500',
        leaveTo: 'translate-x-full',
      }"
      v-model="drawerright"
    >
      <div class="h-screen overflow-y-auto">
        <p class="sticky top-0 p-5">Right Draw</p>
        <div class="h-[1000px]"></div></div
    ></NavDrawer>
    <!-- Top drawer -->
    <NavDrawer
      container-class="flex min-h-full items-start"
      :panel-transition-props="{
        enter: 'transform transition ease-in-out duration-500',
        enterFrom: '-translate-y-full',
        leave: 'transform transition ease-in-out duration-500',
        leaveTo: '-translate-y-full',
      }"
      panel-class="w-screen h-[300px] dark:border-gray-800 bg-white dark:bg-gray-900"
      v-model="drawertop"
    >
      <div class="h-full overflow-y-auto">
        <p class="sticky top-0 p-5">Top Draw</p>
      </div></NavDrawer
    >
    <!-- Bottom drawer -->
    <NavDrawer
      container-class="flex min-h-full items-end"
      :panel-transition-props="{
        enter: 'transform transition ease-in-out duration-500',
        enterFrom: 'translate-y-full',
        leave: 'transform transition ease-in-out duration-500',
        leaveTo: 'translate-y-full',
      }"
      panel-class="w-screen h-[300px] dark:border-gray-800 bg-white dark:bg-gray-900"
      v-model="drawerbottom"
    >
      <div class="h-full overflow-y-auto">
        <p class="sticky top-0 p-5">Bottom Draw</p>
      </div></NavDrawer
    >
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "logged-in" });

const modal = ref(false);
const drawer = ref(false);
const drawerright = ref(false);
const drawertop = ref(false);
const drawerbottom = ref(false);
</script>

<style scoped></style>
