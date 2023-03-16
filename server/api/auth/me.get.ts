export default defineEventHandler(async (event) => {
  const { user } = event.context;
  if (user) {
    // get user based on id
    const userData = await prisma.user.findUnique({ where: { id: user.id } });
    // remove password hash before returning user
    // @ts-ignore
    delete userData.password;
    return userData;
  }
  return null;
});
