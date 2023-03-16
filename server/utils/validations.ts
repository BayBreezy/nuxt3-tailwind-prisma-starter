import { object, string } from "yup";
export const VLogin = object({
  email: string().email().required(),
  password: string().min(6).required(),
});
export const VRegister = object({
  email: string().email().required(),
  password: string().min(6).required(),
  username: string().min(3).required(),
});
