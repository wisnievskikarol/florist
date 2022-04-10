import axios from "axios";
import { store } from "../index";

const API_URL = "http://localhost:3001";

const getHeaders = () => {
  return {
    headers: {
      authorization: store.getState().user.token,
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
  register: (payload) => requests.post("/register", payload),
  whoami: () => requests.get("/whoami"),
};
