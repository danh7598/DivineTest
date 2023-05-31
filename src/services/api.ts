import axios from 'axios';
import {store} from '../redux/store';
import {API_URL} from '../constant/config';

const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${store.getState().auth.token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log('error responmse', error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default API;
