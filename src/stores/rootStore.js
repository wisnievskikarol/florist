import userReducer from "./userInfoStore";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  version: 1,
  storage,
  blacklist: ["error"],
};

export const rootStore = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});
