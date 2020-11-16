import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VegetableState {
  name: string;
}

const initialState: VegetableState = {
  name: "redux-tomato",
};

const vegetable = createSlice({
  name: "vegetable",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const vegetableActions = { ...vegetable.actions };

export default vegetable;
