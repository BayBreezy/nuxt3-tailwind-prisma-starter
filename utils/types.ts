import { User } from "@prisma/client";
import { InferType } from "yup";

export type AuthResponse = {
  token: string;
  user: User;
};

export type TLogin = InferType<typeof LoginSchema>;
export type TRegister = InferType<typeof RegisterSchema>;
