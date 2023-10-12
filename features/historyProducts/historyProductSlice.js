import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllHistory } from "@/network/user";
export const fetchHistory = createAsyncThunk("fetchHistory", async () => {
  try {
    const response = await fetchAllHistory();
    return response.data.tableData;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
});

const initialState = {
  history: [],
  filteredHistory: [],
  loading: false,
  isError: false,
};

const historyProduct = createSlice({
  name: "history",
  initialState,
  reducers: {
    filterHistory(state, action) {
      state.filteredHistory = state.history.filter((history) =>
        history.user.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.history = action.payload;
        state.filteredHistory = action.payload;
        state.loading = false;
      })
      .addCase(fetchHistory.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      });
  },
});

export const { filterHistory,filteredData } = historyProduct.actions;
export default historyProduct.reducer;
