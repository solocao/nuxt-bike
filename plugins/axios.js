import axios from 'axios';
import Vue from 'vue'
import qs from 'qs';
import store from '../store';

axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.baseURL = 'http://139.196.85.194:8083';
// axios.defaults.baseURL = 'http://caowei.wang:8083';
axios.defaults.baseURL = 'http://0.0.0.0:8083';
// axios.defaults.withCredentials = true
export default ({ app }) => {
  const get = (params) => {
    const { url, payload, auth } = params;
    let config = {};
    // 负载不为空
    if (payload !== null || payload !== undefined) {
      config = Object.assign({}, config, { params: payload });
    }
    // 需要验证
    if (auth) {
      config = Object.assign({}, config, {
        headers: {
          authorization: app.store.state.user.auth
        }
      });
    }
    return axios.get(url, config).then(x => x.data);
  };

  const post = (params) => {
    const { url, payload, auth } = params;
    let authHeader = {};
    // 需要验证
    if (auth) {
      authHeader = {
        headers: {
          authorization: app.store.state.user.auth
        }
      };
    }
    return axios.post(url, qs.stringify(payload), authHeader).then(x => x.data);
  };

  const upload = (params) => {
    const { url, payload } = params;
    return axios.post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(x => x.data);
  };
  // 全局请求数据
  Vue.prototype.get = get;
  Vue.prototype.post = post;
  Vue.prototype.upload = upload;
}
