"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState =  {
  initialState: {
   
  },
}
const counterSlice = createSlice({
  name: "stateEl",
  initialState,
  reducers: {
   

    // setFilterCards: (state, action: PayloadAction<ElementType[]>) => {
    //   state.filterArray = [...action.payload];
    //   typeof window !== "undefined" &&
    //     localStorage.setItem("filter_elem", JSON.stringify(state.filterArray));
    // },
    // setInputValues: (state, action: PayloadAction<string>) => {
    //   state.inputValue = action.payload;
    //   typeof window !== "undefined" &&
    //     localStorage.setItem("input_value", state.inputValue);
    // },
   
    
   
   
  },
});

export const {

  // setFilterCards,
  // setInputValues,
} = counterSlice.actions;

export default counterSlice.reducer;
