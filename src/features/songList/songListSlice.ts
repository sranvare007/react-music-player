import { createSlice } from "@reduxjs/toolkit";

export const songsListSlice = createSlice({
  name: "songsList",
  initialState: {
    value: [],
  },
  reducers: {
    setSongsList: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSongsList } = songsListSlice.actions;

export default songsListSlice.reducer;
