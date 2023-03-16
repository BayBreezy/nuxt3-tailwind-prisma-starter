<template>
  <Line
    style="height: 100%; width: 100%; position: relative"
    :data="data"
    :options="options"
  />
</template>

<script setup lang="ts">
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = withDefaults(
  defineProps<{
    data: ChartData<"line">;
    options?: ChartOptions<"line">;
  }>(),
  {}
);
</script>

<style scoped></style>
