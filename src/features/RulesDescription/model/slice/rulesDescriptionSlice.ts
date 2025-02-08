import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RulesDescriptionSchema } from "../types/rulesDescriptionSchema";

const initialState: RulesDescriptionSchema = {
  descriptionValue: "",
};

export const rulesDescriptionSlice = createSlice({
  name: "rulesDescription",
  initialState,
  reducers: {
    setDescription: (state, action: PayloadAction<string>) => {
      state.descriptionValue = action.payload;
    },
    clearDescription: (state) => {
      state.descriptionValue = "";
    },
  },
});

export const { actions: rulesDescAction } = rulesDescriptionSlice;
export const { reducer: rulesDescReducer } = rulesDescriptionSlice;
