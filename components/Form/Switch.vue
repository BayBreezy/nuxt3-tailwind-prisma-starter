<template>
  <div>
    <HSwitch
      :name="name"
      :id="id"
      v-model="value"
      :class="value ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'"
      class="relative inline-flex h-[12px] w-[45px] shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-300 focus:outline-none"
    >
      <span
        aria-hidden="true"
        :class="value ? 'translate-x-6' : '-translate-x-1'"
        class="pointer-events-none absolute top-1/2 inline-flex h-[20px] w-[20px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow ring-1 ring-dark/5 transition"
      >
        <TransitionScale :scale="0.9">
          <Icon class="text-green-500" name="ph:check" size="10" v-if="value" />
        </TransitionScale>
      </span>
    </HSwitch>
  </div>
</template>

<script lang="ts">
export default { inheritAttrs: false };
</script>

<script setup lang="ts">
import { useField } from "vee-validate";
const props = defineProps({
  id: String,
  modelValue: null,
  checkedValue: null,
  name: {
    type: String,
    required: true,
  },
  rules: null,
});

const { value } = useField(ref(props.name), props.rules, {
  validateOnValueUpdate: true,
  initialValue: props.modelValue,
  type: "checkbox",
  checkedValue: props.checkedValue,
});
</script>
