import Cookies from "js-cookie";


export const setCookie = (key: string, value: any): void => {
  if (value !== undefined) {
    Cookies.set(key, value);
  }
};

export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

export const removeCookie = (key: string): void => {
  Cookies.remove(key);
};
