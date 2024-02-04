import Cookies from "js-cookie";

type CookieOptions = {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
};

export const setCookie = (key: string, value: string, options: CookieOptions = {}): void => {
  Cookies.set(key, value, options);
};

export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

export const removeCookie = (key: string): void => {
  Cookies.remove(key);
};
