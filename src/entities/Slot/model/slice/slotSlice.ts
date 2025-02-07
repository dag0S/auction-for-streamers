import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlotsSchema } from "../types/slotsSchema";
import { ISlot, ISlotInput } from "../types/slot";

const initialState: SlotsSchema = {
  slots: [],
};

let maxFastId = 0;

export const slotsSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    setSlots: (state, action: PayloadAction<ISlot[]>) => {
      state.slots = action.payload;
    },
    addSlot: (state, action: PayloadAction<ISlotInput>) => {
      state.slots.push({
        ...action.payload,
        fastId: ++maxFastId,
        id: Math.random().toString(),
      });
    },
    updateSlot: (state, action: PayloadAction<ISlot>) => {
      const { id } = action.payload;

      const foundSlotIndex = state.slots.findIndex((slot) => slot.id === id);

      if (foundSlotIndex !== -1) {
        state.slots[foundSlotIndex] = action.payload;
      }
    },
    removeSlot: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.slots = state.slots.filter((slot) => slot.id !== id);
    },
    clearAllSlots: (state) => {
      state.slots = [];
    },
  },
});

export const { actions: slotsActions } = slotsSlice;
export const { reducer: slotsReducer } = slotsSlice;
