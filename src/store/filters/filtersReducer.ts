import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortOptions } from "../../services/product";

interface FiltersState {
  sort: SortOptions;
  selectedBrand: string;
  selectedModel: string;
  searchQuery: string;
}

const initialState: FiltersState = {
  sort: SortOptions.DateAsc,
  selectedBrand: "",
  selectedModel: "",
  searchQuery: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<SortOptions>) {
      state.sort = action.payload;
    },
    setSelectedBrand(state, action: PayloadAction<string>) {
      state.selectedBrand = action.payload;
    },
    setSelectedModel(state, action: PayloadAction<string>) {
      state.selectedModel = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSort, setSelectedBrand, setSelectedModel, setSearchQuery } =
  filtersSlice.actions;

export default filtersSlice.reducer;
