import axios from "axios";
import { store } from "../index";

const API_URL = "https://plants-for-you.herokuapp.com";

const getHeaders = () => {
  return {
    headers: {
      authorization: `Bearer ${store.getState().user.token}`,
    },
  };
};

class Request {
  delete = (url) => axios.delete(`${API_URL}${url}`, getHeaders());
  get = (url) => axios.get(`${API_URL}${url}`, getHeaders());
  put = (url, body) => axios.put(`${API_URL}${url}`, body, getHeaders());
  post = (url, body) => axios.post(`${API_URL}${url}`, body, getHeaders());
}

const requests = new Request();

export const auth = {
  login: (payload) => requests.post("/login", payload),
  register: (payload) => requests.post("/api/v1/registration", payload),
  whoami: () => requests.get("/whoami"),
  confirmAccount: (token) =>
    axios.get(`${API_URL}/api/v1/registration/confirm`, {
      params: { token: token },
    }),
};
export const noAuth = {
  plants: () => requests.get("/api/v1/plants/no-auth"),
};
