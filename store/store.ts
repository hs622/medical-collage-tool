import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ModuleSlice from "./slices/table/moduleSlice";
import RoleSlice from './slices/table/roleSlice';

const tableSlices = combineReducers({
  module: ModuleSlice,
  roles: RoleSlice,
});

export const store = configureStore({
  reducer: combineReducers({
    table: tableSlices,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
