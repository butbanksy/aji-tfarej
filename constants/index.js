export const BASE_URL = "http://192.168.1.13:8000/api";

export const headersConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
