import userReducer from "./userInfoStore";
import { combineReducers } from "redux";

export const rootStore = combineReducers({
  user: userReducer,
});
