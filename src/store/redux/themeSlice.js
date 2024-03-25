import { createSlice } from "@reduxjs/toolkit";
import { THEMES } from "../../constants/Color";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: THEMES.LIGHT,
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    },
  },
});

export const toggleTheme = themeSlice.actions.toggleTheme;

export default themeSlice.reducer;
