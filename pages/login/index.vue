<template>
  <div>
    <main class="flex h-hero items-center justify-center">
      <div class="w-full px-5 lg:w-[345px]">
        <h1 class="text-center text-3xl font-medium">Welcome back</h1>
        <p class="mt-5 text-center">
          <span class="text-gray-500 dark:text-gray-400"
            >Don't have an account?</span
          >
          <NuxtLink to="/register" class="ml-2 text-primary-500"
            >Sign up</NuxtLink
          >
        </p>
        <form class="mt-10" @submit="submit">
          <div>
            <FormInput name="email" type="email" label="Email" />
          </div>
          <div class="mt-2">
            <FormInput
              hint="6 characters or more"
              name="password"
              type="password"
              label="Password"
            />
          </div>
          <div class="mt-7">
            <button type="submit" class="btn btn-primary mt-4 w-full">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { AuthResponse, TLogin } from "@/utils/types";

// For seo
useHead({ title: "Login" });

const { handleSubmit } = useForm<TLogin>({
  validationSchema: LoginSchema,
});

const user = useUser();

const submit = handleSubmit(async (values) => {
  const loadId = useToast().loading("Loading...");
  try {
    // Log the user in
    const res = await $fetch<AuthResponse>("/api/auth/login", {
      method: "POST",
      body: values,
    });
    user.value = res.user;
    useToast().success("Logged in successfully");
    await navigateTo("/");
  } catch (error: any) {
    useToast().error(error.data.message);
  } finally {
    useToast().remove(loadId);
  }
});
</script>

<style scoped></style>
