import { configureStore } from "@reduxjs/toolkit";
import { slotsReducer } from "@/src/entities/Slot";
import { searchReducer } from "@/src/widgets/SlotSearch";

export const makeStore = () => {
  return configureStore({
    reducer: {
      slots: slotsReducer,
      search: searchReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
