export default defineEventHandler(async (event) => {
  setCookie(event, "user_token", "", { maxAge: 0 });
  return "Logged out";
});
