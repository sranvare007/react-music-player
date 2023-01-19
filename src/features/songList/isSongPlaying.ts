import { createSlice } from "@reduxjs/toolkit";

export const isSongPlayingSlice = createSlice({
  name: "isSongPlaying",
  initialState: {
    value: false,
  },
  reducers: {
    setIsSongPlaying: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsSongPlaying } = isSongPlayingSlice.actions;

export default isSongPlayingSlice.reducer;
