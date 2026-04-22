import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRoles = createAsyncThunk(
  "roles/fetchRoles",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/roles");
      const parsed = await res.json();
  
      if (parsed.status) {
        return {
          ...parsed,
        };
      }
    } catch (error) {
      return rejectWithValue(error || "Failed to fetch roles.");
    }
  },
);
