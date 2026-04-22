// import { ApiResponseObject } from "@/types/api.zod";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchModules = createAsyncThunk(
  "modules/fetchModules",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/modules")
      if (!res.ok) throw new Error("Failed to fetch.");
      const parsed = await res.json()

      if (parsed.status) return { 
        ...parsed
      };
    } catch (err) {
      return rejectWithValue(err || "something went wrong.")
    }
  },
);
