import axios from 'axios';

const SERVER_API = 'http://api.mbus.if.ua/api';
//process.env.VUE_APP_API;

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