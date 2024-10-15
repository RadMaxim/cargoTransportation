// src/app/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const rootReducer = combineReducers({
  stateElem: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
