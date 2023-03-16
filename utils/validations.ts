import { object, string } from "yup";

// validation object for login form
export const LoginSchema = object().shape({
  email: string().email().required(),
  password: string().min(6).required(),
});

// validation object for register form
export const RegisterSchema = object().shape({
  username: string().min(3).required(),
  email: string().email().required(),
  password: string().min(6).required(),
});
