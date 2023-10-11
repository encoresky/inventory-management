import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { employee, purpose } from "@/dummyData/employeeList";

const initialState = {
  employee: employee,
  purpose: purpose,
  loading: false,
  isError: false,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
});

export default employeesSlice.reducer;
