import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ModuleSlice from "./slices/moduleSlice";

export const store = configureStore({
  reducer: combineReducers({
    module: ModuleSlice,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
