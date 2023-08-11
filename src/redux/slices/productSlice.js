import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../application/instance";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product }) => {
    const { data } = await instance.post("/products", { product });

    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveProduct.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(saveProduct.rejected, (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    });
  },
});

export const productReducer = productSlice.reducer;
