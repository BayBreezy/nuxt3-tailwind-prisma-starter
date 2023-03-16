<template>
  <Bar
    style="height: 100%; width: 100%; position: relative"
    :data="data"
    :options="options"
  />
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartOptions,
  type ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const props = withDefaults(
  defineProps<{
    data: ChartData<"bar">;
    options?: ChartOptions<"bar">;
  }>(),
  {}
);
</script>

<style scoped></style>
