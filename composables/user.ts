import { User } from "@prisma/client";

export const useUser = () => useState<User | null | undefined>("user");

export const fetchUser = async () => {
  const user = useUser();
  const data = await $fetch<User>("/api/auth/me", {
    credentials: "include",
    // @ts-ignore
    headers: useRequestHeaders(),
  });
  user.value = data;
  return data;
};
