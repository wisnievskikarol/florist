import axios from "axios";
import { store } from "../index";

const API_URL =
  process.env.REACT_APP_API_URL || "https://plants-for-you.herokuapp.com";

const getHeaders = () => {
  return {
    headers: {
      authorization: `Bearer ${
        store.getState().user.token ? store.getState().user.token : ""
      }`,
      "Access-Control-Allow-Origin": "https://plants-for-you.herokuapp.com",
      "Access-Control-Allow-Methods": "GET, POST, PATCH",
      "Content-Type": "application/json",
    },
  };
};

class Request {
  delete = (url) => axios.delete(`${API_URL}${url}`, getHeaders());
  get = (url) => axios.get(`${API_URL}${url}`, getHeaders());
  put = (url, body) => axios.put(`${API_URL}${url}`, body, getHeaders());
  post = (url, body) => axios.post(`${API_URL}${url}`, body, getHeaders());
  patch = (url, body) => axios.patch(`${API_URL}${url}`, body, getHeaders());
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
  plants: () => requests.get("/api/v1/plants"),
};

export const order = {
  addToBasket: (payload) => requests.post("/api/v1/cart/all", payload),
  makeOrder: (payload) => requests.post("/api/v1/order", payload),
  takeOne: (id) => requests.get(`/api/v1/order/${id}`),
  takeAll: () => requests.get("/api/v1/order"),
  updateStatus: (id, payload) => requests.patch(`/api/v1/order/${id}`, payload),
};
