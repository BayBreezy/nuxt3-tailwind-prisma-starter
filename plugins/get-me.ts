export default defineNuxtPlugin(async (nuxt) => {
  try {
    await fetchUser();
  } catch (error) {
    console.log(error);
  }
});
