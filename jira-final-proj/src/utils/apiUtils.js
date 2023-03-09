import axios from "axios";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIxNC8wMi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzYzMzI4MDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NjQ4MDQwMH0.e3UrKdKqwFislz0cqribEEthuaW4HOuD4xwr1CTRQwg";

const api = axios.create({
  baseURL: "https://jiranew.cybersoft.edu.vn/api/",
});

api.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: localStorage.getItem("UserAdmin")
      ? `Bearer ${JSON.parse(localStorage.getItem("UserAdmin")).accessToken}`
      : "",
  };

  return config;
});

export default api;
