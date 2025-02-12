import { createSlice } from "@reduxjs/toolkit";
import { OptionsSchema } from "../types/optionsSchema";

const initialState: OptionsSchema = {
  showPercent: true,
  showRules: false,
  showTimer: true,
  showTotalAmount: false,
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    togglePercent: (state) => {
      state.showPercent = !state.showPercent;
    },
    toggleRules: (state) => {
      state.showRules = !state.showRules;
    },
    toggleTimer: (state) => {
      state.showTimer = !state.showTimer;
    },
    toggleShowTotalAmount: (state) => {
      state.showTotalAmount = !state.showTotalAmount;
    },
  },
});

export const { actions: optionsAction } = optionsSlice;
export const { reducer: optionsReducer } = optionsSlice;
