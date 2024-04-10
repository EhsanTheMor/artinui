import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
};

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      localStorage.setItem("jwt", action.payload);
      state.token = action.payload;
    },
    clearToken(state) {
      localStorage.clear();
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
