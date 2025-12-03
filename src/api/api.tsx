import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // backend URL
});

export const fetchPage = (path: string) => api.get(`/pages/${path}`);
export const fetchMenus = (layout: string) => api.get(`/menus/${layout}`);
export const fetchComponentData = (endpoint: string, data?: any) => api.get(endpoint);
export default api;
