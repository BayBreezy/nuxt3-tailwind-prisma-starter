<template>
  <div>
    <h1 class="mb-5 text-xl font-bold">Charts</h1>

    <section class="mt-5">
      <div class="grid h-[450px] w-full grid-cols-1 gap-10 lg:grid-cols-2">
        <div class="h-[450px] w-full">
          <ChartBar :options="options" :data="data" />
        </div>
        <div class="h-[450px] w-full">
          <ChartLine :options="options" :data="lineData" />
        </div>
        <div class="h-[450px] w-full">
          <ChartPie :options="options" :data="pieData" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ChartData, ChartOptions } from "chart.js";
import colors from "tailwindcss/colors";

const { isDark } = useTheme();

definePageMeta({ layout: "admin", middleware: "logged-in" });
const monthLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const options = ref<any>({
  responsive: true,
  maintainAspectRatio: false,
});
watchEffect(() => {
  options.value = {
    ...options.value,
    scales: {
      x: {
        grid: { color: isDark.value ? colors.gray[900] : colors.gray[100] },
      },
      y: {
        grid: { color: isDark.value ? colors.gray[900] : colors.gray[100] },
      },
    },
  };
});
const data = ref<ChartData<"bar">>({
  labels: monthLabels,
  datasets: [
    {
      label: "New users",
      backgroundColor: colors.violet[500],
      barPercentage: 0.5,
      borderRadius: 2,
      data: [40, 39, 10, 40, 39, 80, 40, 39, 10, 40, 39, 80],
    },
  ],
});
const lineData = ref<ChartData<"line">>({
  labels: monthLabels,
  datasets: [
    {
      label: "New users",
      backgroundColor: colors.violet[500],
      borderCapStyle: "round",
      borderWidth: 2,
      borderColor: colors.violet[500],
      pointHoverRadius: 10,
      tension: 0.4,
      pointRadius: 1,
      data: [40, 39, 10, 40, 39, 80, 40, 39, 10, 40, 39, 80],
    },
  ],
});

const pieData = ref<ChartData<"pie">>({
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "New users",
      backgroundColor: [
        colors.violet[500],
        colors.red[500],
        colors.blue[500],
        colors.green[500],
        colors.yellow[500],
        colors.orange[500],
      ],
      data: [40, 39, 10, 40],
    },
  ],
});

// function used to generate 12 random numbers between 10 and 100
const random = () => Math.floor(Math.random() * 90) + 10;
// update the chart data every 2 seconds
const barInt = setInterval(() => {
  data.value = {
    ...data.value,
    datasets: [
      {
        ...data.value.datasets[0],
        data: Array.from({ length: 12 }, random),
      },
    ],
  };
  lineData.value = {
    ...lineData.value,
    datasets: [
      {
        ...lineData.value.datasets[0],
        data: Array.from({ length: 12 }, random),
      },
    ],
  };
}, 10000);

onBeforeUnmount(() => clearInterval(barInt));
</script>

<style scoped></style>
