import axios from "../axiosInstance";
import { setCookie, getCookie } from "cookies-next";

export const refreshAccessToken = async () => {
  try {
    const response = await axios.post("/api/auth/refresh-token", {});
    return response.data.accessToken;
  } catch (error) {
    throw new Error("Access token yenilenmedi.");
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`/api/auth/login`, credentials);
    const {
      accessToken,
      refreshToken,
      username,
      userId,
      email,
      firstName,
      lastName,
      phoneNumber,
      roles,
    } = response.data;
    setCookie(
      "userInfo",
      JSON.stringify({
        username: username,
        userId: userId,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        roles: roles,
      }),
      { maxAge: 60 * 60 * 24 * 7, path: "/" }
    ); // 1 gün

    setCookie("accessToken", accessToken, { maxAge: 60 * 60 * 24, path: "/" }); // 1 gün
    setCookie("refreshToken", refreshToken, {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    }); // 7 gün

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Sehv Ad ve ya Sifre");
    } else {
      throw new Error("Giriş Uğursuzdur !");
    }
  }
};
