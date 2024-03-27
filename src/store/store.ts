import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toasts from "./reducers/toasts";
import localforage from "localforage";
import { persistReducer, persistStore } from "redux-persist";

const currencyPersistConfig = {
  key: "portfolioConfigs",
  storage: localforage,
  safelist: ["toasts"],
};

const all = combineReducers({
  toasts,
});

const reducers = persistReducer(currencyPersistConfig, all);

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export { store, persistor };
