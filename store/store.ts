import { combineReducers, configureStore } from "@reduxjs/toolkit"
import RBACSlice from './slices/rbacSlice';
import StudentSlice from "./slices/studentSlice";
import ModuleSlice from './slices/moduleSlice';

export const store = configureStore({
  reducer: combineReducers({
    table: StudentSlice,
    module: ModuleSlice,
    rbac: RBACSlice.reducer,
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;