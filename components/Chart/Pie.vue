<template>
  <Pie
    style="height: 100%; width: 100%; position: relative"
    :data="data"
    :options="options"
  />
</template>

<script setup lang="ts">
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const props = withDefaults(
  defineProps<{
    data: ChartData<"pie">;
    options?: ChartOptions<"pie">;
  }>(),
  {}
);
</script>

<style scoped></style>
