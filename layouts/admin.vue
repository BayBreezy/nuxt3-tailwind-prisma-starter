<template>
  <div>
    <aside
      class="fixed inset-y-0 hidden border-r bg-white dark:border-gray-900 dark:bg-dark lg:block lg:w-72"
    >
      <div class="p-5">
        <p class="text-lg font-semibold">Menu</p>

        <nav class="mt-7 flex flex-col gap-y-2">
          <template v-for="(l, i) in navlinks" :key="i">
            <NuxtLink
              class="flex transform items-center gap-4 rounded-md px-3 py-2 text-sm text-gray-600 transition duration-300 hover:bg-gray-100 active:scale-95 dark:text-gray-400 dark:hover:bg-gray-800 hover:dark:text-gray-100"
              :to="l.link"
            >
              <Icon :name="l.icon" size="18" />
              <span>
                {{ l.text }}
              </span>
            </NuxtLink>
          </template>
        </nav>
      </div>
    </aside>
    <main class="lg:ml-72">
      <header
        class="flex h-16 w-full items-center px-5 shadow-sm dark:bg-gray-900"
      >
        <div class="lg:hidden">
          <button
            @click="drawer = true"
            v-tooltip="`Toggle menu`"
            class="btn-icon"
          >
            <Icon size="18" name="heroicons:bars-2" />
          </button>
          <NavDrawer v-model="drawer">
            <div class="p-5">
              <p class="text-lg font-semibold">Menu</p>

              <nav class="mt-7 flex flex-col gap-y-2">
                <template v-for="(l, i) in navlinks" :key="i">
                  <NuxtLink
                    @click="drawer = false"
                    class="flex transform items-center gap-4 rounded-md px-3 py-2 text-sm text-gray-600 transition duration-300 hover:bg-gray-100 active:scale-95 dark:text-gray-400 dark:hover:bg-gray-800 hover:dark:text-gray-100"
                    :to="l.link"
                  >
                    <Icon :name="l.icon" size="18" />
                    <span>
                      {{ l.text }}
                    </span>
                  </NuxtLink>
                </template>
              </nav>
            </div>
          </NavDrawer>
        </div>
        <div class="ml-auto flex items-center gap-3">
          <button @click="logout()" class="btn btn-outline text-xs">
            Logout
          </button>
          <button
            v-tooltip="`Change theme`"
            @click="toggleDark()"
            class="btn-icon"
          >
            <Icon size="18" name="heroicons:sun" />
          </button>
        </div>
      </header>
      <div class="p-5">
        <slot />
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
const { toggleDark } = useTheme();
const user = useUser();

const logout = async () => {
  useToast().info("Logged out");
  await $fetch("/api/auth/logout");
  user.value = null;
  await navigateTo("/", { replace: true });
};
const drawer = useState(() => false);
const navlinks = [
  { text: "Dashboard", link: "/account/dashboard", icon: "ph:laptop" },
  { text: "Modals", link: "/account/modals", icon: "ph:square-logo-light" },
  { text: "Table", link: "/account/tables", icon: "ph:table" },
  { text: "Charts", link: "/account/charts", icon: "ph:chart-bar" },
  { text: "Form inputs", link: "/account/forms", icon: "ph:textbox" },
  { text: "Toasts", link: "/account/toasts", icon: "ph:popcorn" },
  { text: "Tooltip", link: "/account/tooltip", icon: "ph:chat" },
  { text: "Command", link: "/account/command", icon: "ph:command" },
];
</script>
