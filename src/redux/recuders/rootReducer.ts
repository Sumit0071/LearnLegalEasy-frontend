import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice"; // Import the reducer directly

// Combine reducers
const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;

// Optional: Export RootState type
export type RootState = ReturnType<typeof rootReducer>;
