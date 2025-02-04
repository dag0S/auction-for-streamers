import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlotsSchema } from "../types/slotsSchema";
import { ISlotInput } from "../types/slot";

const initialState: SlotsSchema = {
  slots: [],
};

let fastId = 1;

export const slotsSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    addSlot: (state, action: PayloadAction<ISlotInput>) => {
      const { amount, name } = action.payload;
      fastId++;

      state.slots = [
        ...state.slots,
        {
          amount,
          name,
          fastId,
          id: Math.random().toString(),
        },
      ];
    },
  },
});

export const { actions: slotsActions } = slotsSlice;
export const { reducer: slotsReducer } = slotsSlice;
