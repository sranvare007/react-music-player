import { createSlice } from "@reduxjs/toolkit";

export const songPlayingSlice = createSlice({
  name: "songPlaying",
  initialState: {
    value: null,
  },
  reducers: {
    setSongPlaying: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSongPlaying } = songPlayingSlice.actions;

export default songPlayingSlice.reducer;
