import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});
instance.interceptors.request.use(
  function (config) {
    if (config.url.endsWith('categoryid=')) {
      config.url = config.url.replace('categoryid=', '');
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    console.log(response.data);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
