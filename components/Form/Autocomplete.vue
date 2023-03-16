<template>
  <div>
    <HCombobox :name="name" v-model="value">
      <div class="relative">
        <HComboboxLabel class="label" v-if="label">{{ label }}</HComboboxLabel>
        <div class="relative">
          <HComboboxInput
            :placeholder="placeholder"
            :display-value="selectedValue"
            @change="query = $event.target.value"
            class="input"
            type="text"
          />
          <HComboboxButton
            class="absolute inset-y-0 right-3 flex items-center justify-center opacity-50"
          >
            <Icon size="16" name="ph:caret-down" />
          </HComboboxButton>
        </div>
        <TransitionSlide :offset="[0, '-10%']">
          <HComboboxOptions
            v-slot="{ open }"
            class="absolute left-0 z-30 mt-1.5 max-h-52 w-full space-y-2 overflow-y-auto rounded-md bg-white p-1 shadow-lg ring-1 ring-black/10 focus:outline-none dark:bg-gray-900"
          >
            <div
              class="px-3 py-2 text-sm opacity-60"
              v-if="open && query == ''"
            >
              {{ placeholder }}
            </div>
            <HComboboxOption
              v-slot="{ active, selected }"
              as="div"
              :key="item as any"
              :value="isObject ? item[keyVal] : item"
              v-for="item in filteredItems"
            >
              <li
                :class="[{ 'bg-primary text-white': active }]"
                class="relative w-full cursor-pointer rounded p-2 transition-colors"
              >
                <span class="text-sm">{{
                  isObject ? item[labelVal] : item
                }}</span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 right-3 flex items-center justify-center"
                >
                  <Icon
                    :class="[active ? 'text-white' : 'text-primary']"
                    name="ph:check-circle"
                    size="22"
                  />
                </span>
              </li>
            </HComboboxOption>
          </HComboboxOptions>
        </TransitionSlide>
      </div>
    </HCombobox>
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
import { useFuse } from "@vueuse/integrations/useFuse";

const props = defineProps({
  label: String,
  items: {
    type: Array,
    default: () => [],
  },
  hint: String,
  placeholder: {
    type: String,
    default: "Search for an option",
  },
  modelValue: null,
  name: {
    type: String,
    required: true,
  },
  rules: null,
  keyVal: {
    type: String,
    default: "id",
  },
  labelVal: {
    type: String,
    default: "text",
  },
});

const query = ref("");

const { errorMessage, value } = useField(ref(props.name), props.rules, {
  validateOnValueUpdate: true,
  label: props.label,
  initialValue: props.modelValue,
});

//check if items is an array of objects
const isObject = props.items.length > 0 && typeof props.items[0] === "object";

// get selected value
const selectedValue = (val: any) => {
  if (isObject) {
    const item = props.items.find((i: any) => i[props.keyVal] === val);
    return item ? item[props.labelVal] : props.placeholder;
  }
  return val;
};

// get filtered items
const filteredItems = computed<any[]>(() => {
  if (isObject) {
    const { results } = useFuse(query, props.items, {
      matchAllWhenSearchEmpty: false,
      resultLimit: 10,
      fuseOptions: {
        keys: [props.labelVal, props.keyVal],
        threshold: 0.6,
      },
    });
    return results.value.map((i) => i.item);
  }
  const { results } = useFuse(query, props.items, {
    matchAllWhenSearchEmpty: false,
    resultLimit: 10,
    fuseOptions: {
      threshold: 0.6,
    },
  });
  return results.value.map((i) => i.item);
});
</script>
