import { createSlice } from "@reduxjs/toolkit";

export const searchValSlice = createSlice({
  name: "searchVal",
  initialState: {
    value: "",
  },
  reducers: {
    setSearchVal: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchVal } = searchValSlice.actions;

export default searchValSlice.reducer;
