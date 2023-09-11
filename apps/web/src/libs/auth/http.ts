import axios, { AxiosInstance } from 'axios';

const API_URL = "http://localhost:8080/v1/";
export const ApiClient = axios.create({
  baseURL: API_URL,
});

export type { AxiosInstance as APIInstance };