import axios, { type AxiosRequestConfig } from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } from "helpers/utils/constants";

export type ResponseData<T> = {
  result: T;
  message: string;
  status: number;
};
export type ErrorData = {
  message: string;
  result: null | boolean;
  status: number;
};

export type MutationResponse = ResponseData<boolean>;

// -------------------------Create an authenticated API instance----------------
export const createAuthenticatedAxiosInstance = (
  baseURL: string // The production base URL of the API
) => {
  const instance = axios.create({ baseURL });

  // Add a request interceptor to set the Authorization header if a token is available
  instance.interceptors.request.use((config: AxiosRequestConfig): any => {
    // Get the token from a cookie
    const token = getCookie(ACCESS_TOKEN_NAME);
    if (token != null) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  // Add a response interceptor to handle errors
  instance.interceptors.response.use(
    (response) => response, // Do nothing if the request succeeds
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        // Redirect to login page if user is not authenticated
        window.location.href = "/";
        deleteCookie(ACCESS_TOKEN_NAME);
        deleteCookie(REFRESH_TOKEN_NAME);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

//------------------ Create an unauthenticated API instance---------------------
export const createUnauthenticatedAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL
  });

  return instance;
};
