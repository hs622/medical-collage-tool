import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchModules } from "../../thunks/module.api";
import { ModuleRow } from "@/types/schemas.zod";
import { InitialState } from "@/app/_components/tables/common";

const initialState: InitialState<ModuleRow> = {
  currentPage: 1,
  data: [],
  error: null,
  limit: 10,
  skip: 0,
  total: 0,
  status: "idle",
};

const ModuleSlice = createSlice({
  name: "table/module",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchModules.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchModules.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        action.error.message || "Unable to fetch data from database.";
    });
    builder.addCase(
      fetchModules.fulfilled,
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
