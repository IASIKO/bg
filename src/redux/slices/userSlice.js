import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../application/instance";

export const authanticateUser = createAsyncThunk(
  "user/authanticateUser",
  async (values) => {
    const route = `/users/${values.isLogin ? "login" : "register"}`;
    try {
      const { data } = await instance.post(route, values.formValues);
      localStorage.setItem("token", data.token);
      localStorage.setItem("refresh_token", data.refreshToken);
      return data;
    } catch (error) {
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
    formError: '',
  },

  reducers: {
    logoutUser: (state) => {
      state.userData = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(authanticateUser.pending, (state) => {
      state.loading = true;
      state.formError = "";
    });
    builder.addCase(authanticateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload.user;
    });
    builder.addCase(authanticateUser.rejected, (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
      state.formError = "Email or password is incorrect";
    });
  },
});

export const { logoutUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
