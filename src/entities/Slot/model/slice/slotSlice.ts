import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlotsSchema } from "../types/slotsSchema";
import { ISlot, ISlotInput } from "../types/slot";
import { SLOTS_LOCALSTORAGE_KEY } from "@/src/shared/const/localstorage";

const loadSlotsFromLocalStorage = (): ISlot[] => {
  const savedSlots = localStorage.getItem(SLOTS_LOCALSTORAGE_KEY);
  return savedSlots ? JSON.parse(savedSlots) : [];
};

const initialState: SlotsSchema = {
  slots: loadSlotsFromLocalStorage(),
};

let maxFastId = 0;

export const slotsSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    addSlot: (state, action: PayloadAction<ISlotInput>) => {
      state.slots.push({
        ...action.payload,
        fastId: ++maxFastId,
        id: Math.random().toString(),
      });
      localStorage.setItem(SLOTS_LOCALSTORAGE_KEY, JSON.stringify(state.slots));
    },
    updateSlot: (state, action: PayloadAction<ISlot>) => {
      const { id } = action.payload;

      const foundSlotIndex = state.slots.findIndex((slot) => slot.id === id);

      if (foundSlotIndex !== -1) {
        state.slots[foundSlotIndex] = action.payload;
        localStorage.setItem(
          SLOTS_LOCALSTORAGE_KEY,
          JSON.stringify(state.slots)
        );
      }
    },
    removeSlot: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.slots = state.slots.filter((slot) => slot.id !== id);
      localStorage.setItem(SLOTS_LOCALSTORAGE_KEY, JSON.stringify(state.slots));
    },
    clearAllSlots: (state) => {
      state.slots = [];
      localStorage.removeItem(SLOTS_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: slotsActions } = slotsSlice;
export const { reducer: slotsReducer } = slotsSlice;
