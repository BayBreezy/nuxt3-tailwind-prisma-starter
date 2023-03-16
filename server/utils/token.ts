import { H3Event } from "h3";
import jwt from "jsonwebtoken";

/**
 * Method used to sign a token
 * @param event - H3Event
 * @param payload - data to be signed
 */
export const setToken = (event: H3Event, payload: any) => {
  setCookie(event, "user_token", payload, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
};

/**
 * Method used to get decoded
 * @param event - H3Event
 * @returns Decoded user or null
 */
export const getToken = (event: H3Event) => {
  const token = getCookie(event, "user_token");
  if (!token) return null;
  const { SECRET } = useRuntimeConfig();
  const decoded = jwt.verify(token, SECRET);
  if (!decoded) return null;
  return decoded;
};
