export const BASE_API_URL = "http://192.168.1.12:8000/api";
export const BASE_URL = "http://192.168.1.12:8000";

export const headersConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
