export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useUser();
  if (!user.value) {
    return await navigateTo("/login");
  }
});
