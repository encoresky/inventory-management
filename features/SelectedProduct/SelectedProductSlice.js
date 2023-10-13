import { createSlice } from "@reduxjs/toolkit";
import { SelectedProduct } from "@/dummyData/employeeList";
const initialState = {
  SelectedProduct: [SelectedProduct],
  loading: false,
  isError: false,
};

const SelectedProductSlice = createSlice({
  name: "SelectedProduct",
  initialState,


});

export default SelectedProductSlice.reducer;
