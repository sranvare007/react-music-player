import { createSlice } from "@reduxjs/toolkit";

export const homePageDataSlice = createSlice({
  name: "homepageData",
  initialState: {
    value: null,
  },
  reducers: {
    setHomePageData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHomePageData } = homePageDataSlice.actions;

export default homePageDataSlice.reducer;
