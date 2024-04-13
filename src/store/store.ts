import { configureStore } from "@reduxjs/toolkit";
import semesterSlice from "../features/semesters/slice/semesterSlice";
import seasonSlice from "../features/seasons/slice/seasonSlice";
import tutorialSlice from "../features/tutorials/slice/tutorialSlice";
import AuthSlice from "../slices/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    semester: semesterSlice,
    season: seasonSlice,
    tutorial: tutorialSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
