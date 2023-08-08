import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../application/instance";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formValues) => {
    try {
      const { data } = await instance.post("/users/register", formValues);
      localStorage.setItem("token", data.token);
      localStorage.setItem("refresh_token", data.refreshToken);
      return data;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userData: null,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload.user;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = "Something went wrong!";
    });
  },
});

export const userReducer = userSlice.reducer;
