import userReducer from "./userInfoStore";
import plantsReducer from "./plantsStore";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  version: 1,
  storage,
  blacklist: ["error"],
};
const plantsPersistConfig = {
  key: "plants",
  version: 1,
  storage,
  blacklist: ["error"],
};

export const rootStore = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  plants: persistReducer(plantsPersistConfig, plantsReducer),
});
