import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    token: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setEmail: (state, action) => {
      state.name = action.payload.email;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const setUserName = userSlice.actions.setName;
export const setUserEmail = userSlice.actions.setEmail;
export const setToken = userSlice.actions.setToken;

export default userSlice.reducer;
