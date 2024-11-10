import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  errorMessage: string | null;
};

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("isAuthenticated"),
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; password: string }>) => {
      if (action.payload.username === "admin" && action.payload.password === "admin") {
        state.isAuthenticated = true;
        state.errorMessage = null;
        localStorage.setItem("isAuthenticated", "true");
      } else {
        state.errorMessage = "Неверный логин или пароль";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
