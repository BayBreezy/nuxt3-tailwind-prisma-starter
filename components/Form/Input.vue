<template>
  <div class="w-full">
    <label v-if="label" class="label" :for="id">{{ label }}</label>
    <input
      class="input"
      v-model="value"
      @input="handleChange"
      @blur="handleBlur"
      @change="handleChange"
      :type="type"
      :name="name"
      :id="id"
      v-bind="$attrs"
    />
    <p class="mt-1 text-xs">
      &nbsp;
      <TransitionSlide group mode="out-in" :offset="[0, 20]">
        <span class="text-gray-500" v-if="hint && !errorMessage">{{
          hint
        }}</span>
        <span class="text-red-500 dark:text-red-400" v-if="errorMessage">{{
          errorMessage
        }}</span>
      </TransitionSlide>
    </p>
  </div>
</template>

<script lang="ts">
export default { inheritAttrs: false };
</script>

<script setup lang="ts">
import { useField } from "vee-validate";
const props = defineProps({
  label: String,
  id: String,
  type: {
    type: String,
    default: "text",
  },
  hint: String,
  modelValue: null,
  name: {
    type: String,
    required: true,
  },
  rules: null,
});

const { errorMessage, handleBlur, value, handleChange } = useField(
  ref(props.name),
  props.rules,
  {
    validateOnValueUpdate: true,
    label: props.label,
    initialValue: props.modelValue,
  }
);
</script>
