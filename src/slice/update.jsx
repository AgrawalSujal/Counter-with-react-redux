import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = state.value + 1;
    },
    sub(state, action) {
      state.value = state.value - 1;
    },
  },
});

export const { add, sub } = updateSlice.actions;
export default updateSlice.reducer;
