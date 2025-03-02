import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WheelControlsSchema } from "../types/wheelControlsSchema";

const initialState: WheelControlsSchema = {
  isRandomTime: true,
  timeFrom: 20,
  timeTo: 100,
  duration: 20,
};

export const wheelControlsSlice = createSlice({
  name: "wheelControls",
  initialState,
  reducers: {
    toggleIsRandomTime: (state) => {
      state.isRandomTime = !state.isRandomTime;
    },
    setTimeFrom: (state, actions: PayloadAction<number>) => {
      state.timeFrom = actions.payload;
    },
    setTimeTo: (state, actions: PayloadAction<number>) => {
      state.timeTo = actions.payload;
    },
    setDuration: (state, actions: PayloadAction<number>) => {
      state.duration = actions.payload;
    },
  },
});

export const { actions: wheelControlsAction } = wheelControlsSlice;
export const { reducer: wheelControlsReducer } = wheelControlsSlice;
