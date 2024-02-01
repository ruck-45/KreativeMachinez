import Cookies, { CookieAttributes } from "js-cookie";

type CookieOptions = {
  expires?: number | Date | string;
  path?: string;
  domain?: string;
  secure?: boolean;
};

export const setCookie = (key: string, value: string, options: CookieOptions = {}): void => {
  if (typeof options.expires === "string") {
    // Check if options.expires is defined before converting
    options.expires = new Date(options.expires); // Convert string to Date object
  }
  Cookies.set(key, value, options as CookieAttributes);
};

export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

export const removeCookie = (key: string): void => {
  Cookies.remove(key);
};
