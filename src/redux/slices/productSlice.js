import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../application/instance";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, isUpdating }, { dispatch }) => {
    const endpoint = isUpdating ? `/products/${product.id}` : "/products";
    const method = isUpdating ? "put" : "post";
    const { data } = await instance[method](endpoint, { product });
    dispatch(fetchProducts());
    return data;
  }
);

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const { data } = await instance.get("/products");
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    selectedProduct: null,
    productsData: [],
    categories: [],
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
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

    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productsData = action.payload.products;
      state.categories = action.payload.categories
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
      state.error = "couldn't fetch home page products, please refresh";
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
