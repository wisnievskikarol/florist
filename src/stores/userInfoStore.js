import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../api/FetchData";
import { LOGIN_ERROR_MESSAGE } from "../constants/errorMessages";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    login: "",
    roles: [],
    loginPending: false,
    error: null,
    isLoggedIn: false,
    token: "",
    refreshToken: "",
  },
  reducers: {
    USER_LOGIN_PENDING: (state) => {
      return {
        ...state,
        error: null,
        loginPending: true,
      };
    },
    USER_LOGIN_SUCCESS: (state, action) => {
      return {
        ...state,
        loginPending: false,
        isLoggedIn: true,
        error: null,
        ...action.payload,
      };
    },
    USER_LOGIN_ERROR: (state, action) => {
      return {
        ...state,
        loginPending: false,
        error: action.payload.error,
      };
    },
    USER_LOGOUT: () => {
      return {};
    },
  },
});

export const {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
} = userSlice.actions;

export const checkAuth = () => (dispatch) => {
  auth
    .whoami()
    .then(() => {})
    .catch(() => {
      dispatch(USER_LOGOUT());
    });
};

export const loginUser = (username, password) => (dispatch) => {
  dispatch(USER_LOGIN_PENDING());
  console.log({ username, password });
  auth
    .login({ username, password })
    .then((res) => {
      console.log(res);
      // const states = {
      //   email: res.data.userInfo.email,
      //   login: res.data.userInfo.login,
      //   roles: res.data.userInfo.roles,
      //   token: res.data.tokens.accessToken,
      //   refreshToken: res.data.tokens.refreshToken,
      // };
      // dispatch(USER_LOGIN_SUCCESS(states));
    })
    .catch((err) => {
      console.log(err);
      dispatch(USER_LOGIN_ERROR({ error: LOGIN_ERROR_MESSAGE }));
    });
};

export const logout = () => (dispatch) => {
  dispatch(USER_LOGOUT());
};

export default userSlice.reducer;
