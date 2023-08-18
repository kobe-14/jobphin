import Axios from "axios";

const apiBase = process.env.NEXT_PUBLIC_API_ENDPOINT;

const api = function () {
  this.apiBase = apiBase;
  this.axios = Axios.create({
    baseURL: this.apiBase,
  });
  this.axios.defaults.headers.post["Content-Type"] = "application/json";
};

api.prototype.getApiBase = function () {
  return this.apiBase;
};

api.prototype.get = function (url, params = {}) {
  return this.axios({
    method: "get",
    url,
    params,
  });
};

api.prototype.post = function (url, data = {}, params = {}) {
  return this.axios({
    method: "post",
    url,
    data,
    params,
  });
};

api.prototype.put = function (url, data, params = {}) {
  return this.axios({
    method: "put",
    url,
    data,
    params,
  });
};

api.prototype.delete = function (url, data) {
  return this.axios({
    method: "delete",
    url,
    data,
  });
};

const API = new api();

export { API };
