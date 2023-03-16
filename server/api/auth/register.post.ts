import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const { SECRET } = useRuntimeConfig();
  const body = await readBody<{
    username: string;
    email: string;
    password: string;
  }>(event);
  try {
    // Validate the body
    await VRegister.validate(body, { abortEarly: true });
    // check if user exist in ddb
    const userExist = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (userExist) {
      throw createError({
        message: "Account taken",
        statusCode: 401,
      });
    }
    // check if password is correct
    const hashed = await bcrypt.hash(body.password, 12);
    const user = await prisma.user.create({
      data: { ...body, password: hashed },
    });
    // create jwt token
    const token = jwt.sign({ id: user.id }, SECRET, {
      expiresIn: "7d",
    });
    // delete password from user object
    // @ts-ignore
    delete user.password;
    setToken(event, token);
    return {
      token,
      user: user,
    };
  } catch (error: any) {
    throw createError({
      message: error.message,
      statusCode: error.statusCode || 401,
    });
  }
});
