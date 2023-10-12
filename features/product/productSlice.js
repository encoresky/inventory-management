import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchAllProducts } from "@/network/user";
import { products } from "@/dummyData/fakeProduct";
// export const fetchProducts = createAsyncThunk("product/fetchAll", async () => {
//   try {
//     const response = await fetchAllProducts();
//     return response.data.tableData;
//   } catch (error) {
//     throw new Error("Failed to fetch products");
//   }
// });

const initialState = {
  products: products,
  filteredProducts: products,
  selectedProduct:[],
  loading: false,
  isError: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProduct(state, action) {
      state.filteredProducts = state.products.filter(
        (product) => product.category == action.payload
      );
    },
    selectedProduct(state, action) {
      const arr = action.payload;
      const tempArr = arr.map((id) => {
        return state.products.find((product) => product.id == id);
      });
      state.selectedProduct = [...tempArr];
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProducts.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.products = action.payload;
  //       state.filteredProducts =action.payload;
  //       state.loading = false;
  //     })
  //     .addCase(fetchProducts.rejected, (state) => {
  //       state.loading = false;
  //       state.isError = true;
  //     });
  // },
});

export const { filterProduct, selectedProduct } = productSlice.actions;
export default productSlice.reducer;
