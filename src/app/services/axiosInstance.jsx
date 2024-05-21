import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import { refreshAccessToken } from './api/user';

const instance = axios.create();

instance.interceptors.request.use(
  async (config) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshAccessToken();
      setCookie('accessToken', newAccessToken, { maxAge: 60 * 60 * 24, path: '/' });
      axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;