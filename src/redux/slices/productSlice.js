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

export const fetchCategoryProducts = createAsyncThunk(
  "product/fetchCategoryProducts",
  async (url) => {
    const { data } = await instance.get(`/products/categories/${url}`);
    return data;
  }
);

export const fetchQueryProducts = createAsyncThunk(
  "product/fetchQueryProducts",
  async (name) => {
    const { data } = await instance.get(`/products?name=${name}`);
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
    categoryProducts: [],
    pagination: {
      currentPage: 1,
      itemsPerPage: 2,
      totalPages: 1,
    },
    searchResults: [],
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination.currentPage = action.payload.currentPage;
    },
    setSearchResults: (state) => {
      state.searchResults = [];
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
      state.categories = action.payload.categories;
      state.pagination.totalPages = Math.ceil(
        action.payload.products.length / state.pagination.itemsPerPage
      );
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
      state.error = "couldn't fetch home page products, please refresh";
    });

    builder.addCase(fetchCategoryProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryProducts = action.payload.products;
      state.pagination.totalPages = Math.ceil(
        action.payload.products.length / state.pagination.itemsPerPage
      );
    });
    builder.addCase(fetchCategoryProducts.rejected, (state) => {
      state.loading = false;
      state.error = "couldn't fetch category products";
    });

    builder.addCase(fetchQueryProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQueryProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.searchResults = action.payload.products;
    });
    builder.addCase(fetchQueryProducts.rejected, (state) => {
      state.loading = false;
      state.error = "something went wrong";
    });
  },
});

export const { setSelectedProduct, setPagination, setSearchResults } = productSlice.actions;

export const productReducer = productSlice.reducer;
