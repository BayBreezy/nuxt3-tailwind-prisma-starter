<template>
  <div>
    <main class="flex h-hero items-center justify-center">
      <div class="w-full px-5 lg:w-[346px]">
        <h1 class="text-center text-3xl font-medium">Join us today</h1>
        <p class="mt-5 text-center">
          <span class="text-gray-500 dark:text-gray-400"
            >Already have an account?</span
          >
          <NuxtLink to="/login" class="ml-2 text-primary-500">Sign in</NuxtLink>
        </p>
        <form class="mt-10" @submit="submit">
          <div>
            <FormInput name="username" label="Username" />
          </div>
          <div class="mt-2">
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
          <div class="mt-4">
            <button type="submit" class="btn btn-primary mt-4 w-full">
              Create account
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { AuthResponse, TRegister } from "@/utils/types";

// For seo
useHead({ title: "Register" });

const { handleSubmit } = useForm<TRegister>({
  validationSchema: RegisterSchema,
});

const user = useUser();

// function used to create account for user
const submit = handleSubmit(async (values) => {
  const loadId = useToast().loading("Loading...");
  try {
    const res = await $fetch<AuthResponse>("/api/auth/register", {
      method: "POST",
      body: values,
    });
    user.value = res.user;
    useToast().success("Account created successfully");
    await navigateTo("/");
  } catch (error: any) {
    useToast().error(error.data.message);
  } finally {
    useToast().remove(loadId);
  }
});
</script>

<style scoped></style>
