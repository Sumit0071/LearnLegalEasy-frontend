import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface ThemeState {
  darkMode: boolean;
}

// Initial state with localStorage check
const initialState: ThemeState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode") ?? "false"),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      localStorage.setItem("darkMode", JSON.stringify(action.payload));
    },
  },
});

// Export action and reducer
export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
