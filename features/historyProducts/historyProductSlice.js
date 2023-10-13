import { createSlice } from "@reduxjs/toolkit";
import { history } from "@/dummyData/employeeList";

// export const fetchHistory = createAsyncThunk("fetchHistory", async () => {
//   try {
//     const response = await fetchAllHistory();
//     return response.data.tableData;
//   } catch (error) {
//     throw new Error("Failed to fetch products");
//   }
// });

const initialState = {
  history: [history],
  filteredHistory: [history],
  loading: false,
  isError: false,
};

const historyProduct = createSlice({
  name: "history",
  initialState,
  reducers: {
    filterHistory(state, action) {
      state.filteredHistory = state.history.filter((history) =>
      history.userName && history.userName.includes(action.payload)
    );
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchHistory.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchHistory.fulfilled, (state, action) => {
  //       state.history = action.payload;
  //       state.filteredHistory = action.payload;
  //       state.loading = false;
  //     })
  //     .addCase(fetchHistory.rejected, (state) => {
  //       state.loading = false;
  //       state.isError = true;
  //     });
  // },
});

export const { filterHistory} = historyProduct.actions;
export default historyProduct.reducer;
