import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts } from "@/network/user";
export const fetchProducts = createAsyncThunk("product/fetchAll", async () => {
  try {
    const response = await fetchAllProducts();
    return response.data.tableData;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
});

const initialState = {
  products: [],
  filteredProducts:[],
  loading: false,
  isError: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProduct(state, action) {
      state.filteredProducts = state.products.filter(
        (product) => product.id == action.payload
      );
   
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts =action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      });
  },
});

export const { filterProduct } = productSlice.actions;
export default productSlice.reducer;
