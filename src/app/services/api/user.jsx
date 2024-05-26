import axios from "../axiosInstance";
import { setCookie, getCookie } from "cookies-next";


export const login = async (credentials) => {
  try {
    const response = await axios.post(`/api/auth/login`, credentials);
    const { accessToken, refreshToken } = response.data;

    setCookie("accessToken", accessToken, { maxAge: 60 * 60 * 24, path: "/" }); // 1 gün
    setCookie("refreshToken", refreshToken, {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    }); // 7 gün

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Sehv Ad ve ya Sifre');
    } else {
      throw new Error('Giriş Uğursuzdur !');
    }
  }
};
