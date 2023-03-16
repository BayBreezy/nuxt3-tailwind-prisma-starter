import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const { SECRET } = useRuntimeConfig();
  const body = await readBody<{ email: string; password: string }>(event);
  try {
    // Validate the body
    await VLogin.validate(body, { abortEarly: true });
    // check if user exist in ddb
    const userExist = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (!userExist) {
      throw createError({
        message: "Invalid credentials",
        statusCode: 401,
      });
    }
    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(
      body.password,
      userExist.password
    );
    if (!isPasswordCorrect) {
      throw createError({
        message: "Invalid credentials",
        statusCode: 401,
      });
    }
    // create jwt token
    const token = jwt.sign({ id: userExist.id }, SECRET, {
      expiresIn: "7d",
    });
    // delete password from user object
    // @ts-ignore
    delete userExist.password;
    setToken(event, token);
    return {
      token,
      user: userExist,
    };
  } catch (error: any) {
    throw createError({
      message: error.message,
      statusCode: error.statusCode || 401,
    });
  }
});
