<template>
  <div>
    <HTransitionRoot appear :show="modelValue">
      <HDialog
        as="div"
        @close="$emit('update:modelValue', false)"
        class="relative z-50"
      >
        <HTransitionChild v-bind="overlayTransitionProps">
          <!-- Overlay -->
          <div :class="overlayClass"></div>
        </HTransitionChild>

        <!-- Full screen scrollable container -->
        <div :class="scrollClass">
          <!-- Conatiner used to cbenter the panel -->
          <div :class="containerClass">
            <HTransitionChild v-bind="panelTransitionProps">
              <HDialogPanel :class="panelClass">
                <slot />
              </HDialogPanel>
            </HTransitionChild>
          </div>
        </div>
      </HDialog>
    </HTransitionRoot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  overlayClass: {
    type: String,
    default: "fixed inset-0 bg-black/50",
  },
  containerClass: {
    type: String,
    default: "flex min-h-full items-center justify-center p-4",
  },
  panelClass: {
    type: String,
    default: "w-full max-w-sm rounded-lg shadow bg-white dark:bg-gray-900",
  },
  scrollClass: {
    type: String,
    default: "fixed inset-0 overflow-y-auto",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  panelTransitionProps: {
    type: Object,
    default: {
      enter: "duration-300 ease-out",
      leave: "duration-300 ease-in",
      enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
      enterTo: "opacity-100 translate-y-0 sm:scale-100",
      leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
      leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    },
  },
  overlayTransitionProps: {
    type: Object,
    default: {
      enter: "duration-300 ease-out",
      leave: "duration-300 ease-in",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
    },
  },
});
</script>

<style scoped></style>
