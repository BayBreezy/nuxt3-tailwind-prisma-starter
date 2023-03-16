<template>
  <header class="sticky top-0 bg-white/95 shadow-sm dark:bg-gray-900/90">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
      <div>
        <NuxtLink class="text-lg font-semibold" to="/">NTPS</NuxtLink>
      </div>
      <div class="hidden items-center gap-5 md:flex">
        <NuxtLink v-if="user" to="/account/dashboard" class="btn btn-outline">{{
          user?.username
        }}</NuxtLink>
        <NuxtLink class="btn btn-outline" to="/login">Sign in</NuxtLink>
        <NuxtLink class="btn btn-primary" to="/register"
          >Create account</NuxtLink
        >
        <button @click="toggleDark()" class="btn-icon">
          <Icon size="22" name="heroicons:sun" />
        </button>
      </div>
      <div class="md:hidden">
        <button @click="drawer = true" class="btn-icon">
          <Icon size="22" name="heroicons:bars-2" />
        </button>
        <NavDrawer v-model="drawer">
          <div class="p-5">
            <NuxtLink class="text-lg font-semibold" to="/">NTPS</NuxtLink>

            <nav class="mt-7 flex flex-col gap-3">
              <NuxtLink
                @click="drawer = false"
                v-if="user"
                to="/account/dashboard"
                class="p-2 text-sm"
                >{{ user?.username }}</NuxtLink
              >
              <NuxtLink @click="drawer = false" class="p-2 text-sm" to="/login"
                >Sign in</NuxtLink
              >
              <NuxtLink
                @click="drawer = false"
                class="p-2 text-sm"
                to="/register"
                >Create account</NuxtLink
              >
            </nav>
          </div></NavDrawer
        >
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { toggleDark } = useTheme();
const user = useUser();
const drawer = useState(() => false);
</script>
