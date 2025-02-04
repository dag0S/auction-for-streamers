import { configureStore } from "@reduxjs/toolkit";
import { slotsReducer } from "@/src/entities/Slot";

export const makeStore = () => {
  return configureStore({
    reducer: {
      slots: slotsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
