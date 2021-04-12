import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line
    config.headers.common.Authorization = 'AUTH_TOKEN';
    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
