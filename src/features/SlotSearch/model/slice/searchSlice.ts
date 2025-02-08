import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchSchema } from "../types/searchSchema";

const initialState: SearchSchema = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    clearSearchValue: (state) => {
      state.searchValue = "";
    },
  },
});

export const { actions: searchAction } = searchSlice;
export const { reducer: searchReducer } = searchSlice;
