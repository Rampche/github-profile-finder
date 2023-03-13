import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: `https://api.github.com/users/`,
  timeout: 4000,
});

export { api };
