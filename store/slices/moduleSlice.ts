import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchModuleData } from "../thunks/module.api";
import { ModuleRow } from "@/types/schemas.zod";

interface InitialState {
  currentPage: number;
  limit: number;
  skip: number;
  total: number;
  data: ModuleRow[];
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: InitialState = {
  currentPage: 1,
  data: [],
  error: null,
  limit: 10,
  skip: 0,
  total: 0,
  status: "idle",
};

const ModuleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchModuleData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchModuleData.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        action.error.message || "Unable to fetch data from database.";
    });
    builder.addCase(
      fetchModuleData.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: ModuleRow[];
          limit: number;
          total: number;
          skip: number;
        }>,
      ) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.limit = action.payload.limit;
        state.total = action.payload.total;
        state.skip = action.payload.skip || 0;
      },
    );
  },
});

export const {} = ModuleSlice.actions;
export default ModuleSlice.reducer;
