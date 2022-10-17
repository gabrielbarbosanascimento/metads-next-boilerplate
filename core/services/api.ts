import axios from 'axios';

const ApiService = axios.create({ baseURL: process.env.API_URL });

ApiService.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers = config.headers ? config.headers : {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

ApiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error?.response?.data);
  }
);

export { ApiService };
