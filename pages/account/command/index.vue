<template>
  <div>
    <h1 class="mb-2 text-xl font-bold">Command</h1>
    <p class="text-sm">
      Magic keys. Show different stuff based on key combinations
    </p>

    <section class="mt-10">
      <p class="mb-5">
        Press {{ " " }}
        <span
          class="inline-flex items-center gap-2 rounded border p-1 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          <Icon size="12" name="ph:command" />+ k
        </span>
      </p>
      <p class="mb-5 text-sm">or</p>
      <p class="mb-5">
        Press {{ " " }}
        <span
          class="inline-flex items-center gap-2 rounded border p-1 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400"
        >
          <Icon size="12" name="ph:command" />+ /
        </span>
      </p>
    </section>
    <!-- Command+K modal -->
    <Modal
      panel-class="w-[500px] rounded-lg shadow-lg bg-white dark:bg-gray-900"
      v-model="modal"
    >
      <div>
        <div class="relative border-b dark:border-gray-800">
          <span class="absolute top-1/2 left-3 -translate-y-1/2">
            <Icon
              class="opacity-40"
              name="heroicons:magnifying-glass"
              size="20"
            />
          </span>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            class="block w-full border-none bg-transparent py-3 px-4 pl-10 focus:ring-0"
          />
        </div>
        <div class="p-3">
          <p class="mb-5 text-sm font-medium opacity-60">Suggestions</p>
          <ul>
            <template v-for="(s, i) in suggestions" :key="i">
              <li
                class="mb-1 flex items-center gap-5 rounded-lg p-2 text-sm transition hover:bg-gray-100 hover:dark:bg-gray-600"
              >
                <Icon :name="s.icon" size="17" />
                <span>{{ s.text }}</span>
              </li>
            </template>
          </ul>
        </div>
        <div class="border-t p-3 dark:border-gray-800">
          <p class="mb-5 text-sm font-medium opacity-60">Settings</p>
          <ul>
            <template v-for="(s, i) in settings" :key="i">
              <li
                class="mb-1 flex items-center gap-5 rounded-lg p-2 text-sm opacity-60 transition hover:bg-gray-100 hover:opacity-100 hover:dark:bg-gray-600"
              >
                <Icon :name="s.icon" size="17" />
                <span>{{ s.text }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "logged-in" });

const { ctrl_k, cmd_k, ctrl_slash, cmd_slash } = useMagicKeys();
const modal = ref(false);

watchEffect(() => {
  if (cmd_k.value || ctrl_k.value || ctrl_slash.value || cmd_slash.value) {
    modal.value = !modal.value;
  }
});

const suggestions = [
  { icon: "logos:nuxt-icon", text: "Nuxt" },
  { icon: "logos:vue", text: "Vue" },
  { icon: "logos:tailwindcss-icon", text: "Tailwind" },
  { icon: "logos:vuetifyjs", text: "Vuetify" },
];

const settings = [
  { icon: "ph:gear", text: "Settings" },
  { icon: "ph:user", text: "Profile" },
  { icon: "ph:arrow-square-out-fill", text: "Logout" },
];
</script>

<style scoped></style>
