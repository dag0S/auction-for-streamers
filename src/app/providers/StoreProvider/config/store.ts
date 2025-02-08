import { configureStore } from "@reduxjs/toolkit";
import { slotsReducer } from "@/src/entities/Slot";
import { searchReducer } from "@/src/features/SlotSearch";
import { optionsReducer } from "@/src/features/SlotsOptions";
import { rulesDescReducer } from "@/src/features/RulesDescription";

export const makeStore = () => {
  return configureStore({
    reducer: {
      slots: slotsReducer,
      search: searchReducer,
      options: optionsReducer,
      rulesDesc: rulesDescReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
