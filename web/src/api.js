
import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://e-karya-admin-user-api-new.onrender.com/api";

const api = axios.create({
  baseURL: API_URL.replace(/\/+$/, ""),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
  withCredentials: true,
});

export default api;
