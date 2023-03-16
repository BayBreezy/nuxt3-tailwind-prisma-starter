<template>
  <div>
    <h1 class="mb-5 text-xl font-bold">Toasts</h1>
    <p>Click the buttons to see different toasts</p>
    <section class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
      <button class="btn btn-outline" @click="showToast()">Normal</button>
      <button class="btn btn-outline" @click="showToast('info')">Info</button>
      <button class="btn btn-outline" @click="showToast('success')">
        Success
      </button>
      <button class="btn btn-outline" @click="showToast('warning')">
        Warning
      </button>
      <button class="btn btn-outline" @click="showToast('error')">Error</button>
      <button class="btn btn-outline" @click="showToast('error-color')">
        Error (Colored)
      </button>
      <button class="btn btn-outline" @click="showToast('dark')">Dark</button>
      <button class="btn btn-outline" @click="showToast('btn')">
        Custom close Btn
      </button>
      <button class="btn btn-outline" @click="showToast('promise')">
        Promise
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "#components";
definePageMeta({ layout: "admin", middleware: "logged-in" });

const showToast = (type?: string) => {
  switch (type) {
    case "dark":
      useToast()("Dark themed toast", { theme: "dark" });
      break;
    case "error-color":
      useToast().error("Error with full color", { theme: "colored" });
      break;
    case "error":
      useToast().error("Error with icon & no full color");
      break;
    case "info":
      useToast().info("Info with icon & no full color");
      break;
    case "success":
      useToast().success("Success with icon & no full color");
      break;
    case "warning":
      useToast().warning("Warning with icon & no full color");
      break;
    case "promise":
      useToast().promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
        pending: "Loading data...",
        success: "Data loaded!",
        error: "Error loading data!",
      });
      useToast().promise(new Promise((resolve, rej) => setTimeout(rej, 2500)), {
        pending: "Loading data...",
        success: "Data loaded!",
        error: "Error loading data!",
      });
      break;
    case "btn":
      useToast()("With a custom button", {
        closeButton: (props) =>
          h("button", { class: "btn-icon text-xs" }, "Close"),
      });
      break;

    default:
      useToast()("Normal toast here");
      break;
  }
};
</script>
