import { ACCESS_TOKEN_COOKIE_NAME } from "@/utils/constants";
import _axios, { InternalAxiosRequestConfig } from "axios";
import { cookies } from "./cookies";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const axios = _axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: API_URL,
});