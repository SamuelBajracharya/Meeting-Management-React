import {jwtDecode} from "jwt-decode";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import axios from "axios";

export  const baseInstance = axios.create({
  baseURL: "0.0.0.0:4900/api/v1/hall",
});

export const userInstance = axios.create({
  baseURL: "0.0.0.0:4900/api/v1/hall/user",
});
export const meetingInstance = axios.create({
  baseURL: "0.0.0.0:4900/api/v1/hall/meeting",
});
export const projectInstance = axios.create({
  baseURL: "0.0.0.0:4900/api/v1/hall/projects",
});


export const attachAuthInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(async (config) => {
    const match = document.cookie.match(new RegExp('(^| )accessToken=([^;]+)'));
    const accessToken = match ? match[2] : null;

    if (!accessToken) return config;

    const user = jwtDecode(accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      return config;
    }

    const refreshMatch = document.cookie.match(new RegExp('(^| )refreshToken=([^;]+)'));
    const refreshToken = refreshMatch ? refreshMatch[2] : null;

    if (!refreshToken) return config; // no refresh token

    try {
      const response = await userInstance.post(`/refresh-token`, {token: refreshToken});
      const token = response.data.token;

      Cookies.set("accessToken", token?.accessToken, {secure: true, sameSite: "strict"});
      Cookies.set("refreshToken", token?.refreshToken, {secure: true, sameSite: "strict"});

      // Attach new token to request
      config.headers["Authorization"] = `Bearer ${token?.accessToken}`;
    } catch (err) {
      console.error("Token refresh failed:", err);
    }

    return config;
  }, (error) => Promise.reject(error));
};

attachAuthInterceptor(baseInstance);
attachAuthInterceptor(meetingInstance);
attachAuthInterceptor(projectInstance);