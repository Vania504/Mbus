import axios from 'axios';
import authService from '@/requests/admin/authService';

axios.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  async error => {
    console.log(typeof error, error);
    if(typeof error == 'object'){
      const { status } = error.response;
    if (status === 401) {
      let res = await authService.refreshToken()
      if (res) {
        error.config.headers['Authorization'] = 'Bearer ' + res.authorisation.token;
        return axios.request(error.config);
      }
    }
    }
    return Promise.reject(error);
  }
);

const SERVER_API = 'https://api-prod.mbus.if.ua/api'
//const SERVER_API = 'https://api-dev.mbus.if.ua/api';

export default {
  get(url, headers = {}) {
    return axios.get(SERVER_API + url, headers);
  },
  post(url, body = {}, headers = {}, config = {}) {
    return axios.post(
      SERVER_API + url,
      body,
      headers,
      config,
    );
  },
  delete(url, headers = {}, config = {}) {
    return axios.delete(SERVER_API + url, headers, config);
  },
  put(url, body = {}, config = {}) {
    return axios.put(
      SERVER_API + url,
      body,
      config,
    );
  },
  postExternal(url, body = {}, config = {}) {
    return axios.post(
      SERVER_API + url,
      body,
      config,
    );
  },
};