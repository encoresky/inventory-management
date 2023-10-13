"use client"
import { configureStore } from '@reduxjs/toolkit'
import productSlice from '@/features/product/productSlice';
import historyProductSlice from '@/features/historyProducts/historyProductSlice';
import employeesSlice from '@/features/employees/employeesSlice';
import SelectedProductSlice from "@/features/SelectedProduct/SelectedProductSlice"


export const store = configureStore({
  reducer: {
    product:productSlice,
    history:historyProductSlice,
    employees:employeesSlice,
    SelectedProduct:SelectedProductSlice, 
  },
})