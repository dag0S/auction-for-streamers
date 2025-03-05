import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PreviewSlotSchema } from "../types/PreviewSlotSchema";

const initialState: PreviewSlotSchema = {
  hoveredSlot: null,
};

export const previewSlotSlice = createSlice({
  name: "previewSlot",
  initialState,
  reducers: {
    setHoveredSlot: (state, action: PayloadAction<string | null>) => {
      state.hoveredSlot = action.payload;
    },
  },
});

export const { actions: previewSlotAction } = previewSlotSlice;
export const { reducer: previewSlotReducer } = previewSlotSlice;
