import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface DataFromForm {
  movers: number | null;
  hour: number | null;
  phoneNumber: string | null;
  names: string | null;
  dates: string | null;
}
const initialState: DataFromForm = {
  movers: null,
  hour: null,
  phoneNumber: null,
  names: null,
  dates: null,
};
const counterSlice = createSlice({
  name: "FormData",
  initialState,
  reducers: {
    saveDataFromForm: (state, action: PayloadAction<DataFromForm>) => {
      state = { ...action.payload };
      console.log(state);
      alert(state)
      console.log("state");
    },
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
  saveDataFromForm,
  // setFilterCards,
  // setInputValues,
} = counterSlice.actions;

export default counterSlice.reducer;
