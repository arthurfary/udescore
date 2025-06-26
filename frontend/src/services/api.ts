// src/services/api.ts
import axios, { AxiosRequestConfig } from "axios";

const API = axios.create({
  baseURL: "https://udescore.fooyer.space/backend",
  timeout: 10000,
});

export const useApi = async <T = any>(
  config: AxiosRequestConfig
): Promise<{ data?: T; error?: string; status?: boolean }> => {
  try {
    const response = await API.request<T>(config);
    const success =
      response.data &&
      typeof response.data === "object" &&
      "success" in response.data
        ? (response.data as any).success
        : false;
    return { data: response.data, status: success || false };
  } catch (error: any) {
    return {
      error: error?.response?.data?.message || "Erro Inesperado",
      status: error?.response?.data?.success || false,
    };
  }
};
