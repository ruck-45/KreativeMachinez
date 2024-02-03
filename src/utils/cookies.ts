import Cookies, { CookieAttributes } from "js-cookie";

type CookieOptions = {
  expires?: number | Date | string;
  path?: string;
  domain?: string;
  secure?: boolean;
};

export const setCookie = (key: string, value: string, options: CookieOptions = {}): void => {
  const { expires } = options;
  if ( expires !== undefined) {
      const expiresDate = new Date(expires);
      Cookies.set(key, value, expiresDate);
  }
};

export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

export const removeCookie = (key: string): void => {
  Cookies.remove(key);
};
