export default defineEventHandler((event) => {
  const decodedUser = getToken(event);
  if (decodedUser) {
    event.context.user = decodedUser;
  }
});
