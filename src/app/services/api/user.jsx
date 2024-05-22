import axios from "../axiosInstance";
import { setCookie, getCookie } from "cookies-next";


export const login = async (credentials) => {
  const response = await axios.post(`/api/auth/login`, credentials);
  const { accessToken, refreshToken } = response.data;

  // Access ve Refresh Token'ları cookie'lere kaydet
  setCookie("accessToken", accessToken, { maxAge: 60 * 60 * 24, path: "/" }); // 1 gün
  setCookie("refreshToken", refreshToken, {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  }); // 7 gün

  return response.data;
};

export const refreshAccessToken = async (ctx = null) => {
  const refreshToken = getCookie("refreshToken", {
    req: ctx?.req,
    res: ctx?.res,
  });
  const response = await axios.post(`/api/auth/refresh`, {
    refresh: refreshToken,
  });

  const { accessToken } = response.data;
  setCookie("accessToken", accessToken, { maxAge: 60 * 60 * 24, path: "/" });

  return accessToken;
};
