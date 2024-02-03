import axios from "axios";
import { API_URL } from "../../constants/config";
import { refreshLoggedInUser } from "./authApi";

/***
 * *axios request configs
 */
axios.interceptors.request.use((config) => {
  config.baseURL = API_URL;
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  } else {
    axios.defaults.headers.common.Authorization &&
      delete axios.defaults.headers.common.Authorization;
    config.headers = axios.defaults.headers.common;
  }
  return config;
});

/***
 * *axios response configs
 */
axios.interceptors.response.use(
  async (reuslt) => {
    // let response = await ResponseValidator({ isError: reuslt.data.isError, message: reuslt.data.message })
    return reuslt.data;
    // if (response) {
    //     return reuslt.data
    // }
  },
  async (error) => {
    const expectedErrorRefreshToken =
      error.response && error.response.status === 401;
    if (expectedErrorRefreshToken) {
      const checkLogin = async () => {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          const res = await refreshLoggedInUser({ refreshToken });
          if (!res) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("user");
            window.location.reload();
            return false;
          } else {
            error.config.headers["Authorization"] =
              "Bearer " + res.access.token;
            if (error.config?.data) {
              error.config.data = JSON.parse(error.config.data);
            }
            error.config.baseURL = undefined;
            // Return actual call response.
            return await axios.request(error.config);
          }
        } else {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("user");
          window.location.reload();
          return false;
        }
      };
      let response = await checkLogin();

      if (response) {
        return Promise.resolve(response);
      }
    }

    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500;
    if (!expectedError) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      // userLogout();
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
