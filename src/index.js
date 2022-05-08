import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { rootStore } from "./stores/rootStore";
import { Provider } from "react-redux";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import logger from "redux-logger";

export const store = configureStore({
  reducer: rootStore,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});



let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>LOADING</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
