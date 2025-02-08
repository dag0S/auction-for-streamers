import { createSlice } from "@reduxjs/toolkit";
import { OptionsSchema } from "../types/optionsSchema";

const initialState: OptionsSchema = {
  percent: true,
  rules: false,
  timer: true,
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    togglePercent: (state) => {
      state.percent = !state.percent;
    },
    toggleRules: (state) => {
      state.rules = !state.rules;
    },
    toggleTimer: (state) => {
      state.timer = !state.timer;
    },
  },
});

export const { actions: optionsAction } = optionsSlice;
export const { reducer: optionsReducer } = optionsSlice;
