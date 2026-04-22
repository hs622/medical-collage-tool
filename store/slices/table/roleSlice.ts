import { InitialState } from "@/app/_components/tables/common";
import { fetchRoles } from "@/store/thunks/roles.api";
import { RolesRow } from "@/types/schemas.zod";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TApiResponseObject } from "@/types/thunk.api.zod";

const initialState: InitialState<RolesRow> = {
  currentPage: 1,
  data: [],
  error: null,
  limit: 10,
  skip: 0,
  status: "idle",
  total: 0,
};

const RoleSlice = createSlice({
  name: "table/role",
  initialState,
  reducers: {
    setLimit: () => {},
    setPage: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoles.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "unable to fetch roles.";
    });
    builder.addCase(fetchRoles.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchRoles.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: RolesRow[];
          limit: number;
          total: number;
          skip: number;
        }>,
      ) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.limit = action.payload.limit;
        state.skip = action.payload.skip;
        state.total = action.payload.total;
      },
    );
  },
});

export const {} = RoleSlice.actions;
export default RoleSlice.reducer;
