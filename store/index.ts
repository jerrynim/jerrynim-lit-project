import { combineReducers, configureStore } from "@reduxjs/toolkit";
import vegetable from "./vegetable";

const rootReducer = combineReducers({
  vegetable: vegetable.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
