<template>
  <Modal
    :panel-class="panelClass"
    :scroll-class="scrollClass"
    :container-class="containerClass"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :panel-transition-props="panelTransitionProps"
  >
    <slot />
  </Modal>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  panelClass: {
    type: String,
    default:
      "w-72 h-screen border-r dark:border-gray-800 bg-white dark:bg-gray-900",
  },
  scrollClass: {
    type: String,
    default: "fixed inset-0 overflow-y-auto",
  },
  location: {
    type: String,
    default: "left",
  },
  containerClass: {
    type: String,
    default: "flex min-h-full justify-start",
  },
  panelTransitionProps: {
    type: Object,
    default: {
      enter: "transition ease-out duration-300 transform",
      enterFrom: "-translate-x-full",
      enterTo: "translate-x-0",
      leave: "transition ease-in duration-300 transform",
      leaveFrom: "translate-x-0",
      leaveTo: "-translate-x-full",
    },
  },
});
</script>

<style scoped></style>
