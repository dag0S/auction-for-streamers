import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmotionSchema } from "../types/emotionSchema";

const initialState: EmotionSchema = {
  selectedEmotion: 1,
};

export const emotionSlice = createSlice({
  name: "emotion",
  initialState,
  reducers: {
    setEmotion: (state, action: PayloadAction<number>) => {
      state.selectedEmotion = action.payload;
    },
  },
});

export const { actions: emotionAction } = emotionSlice;
export const { reducer: emotionReducer } = emotionSlice;
