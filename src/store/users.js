import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      // writing regular mutating code here
      state.push({ id: ++lastId, name: action.payload.name });
    },
    userRemoved: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { userAdded, userRemoved } = slice.actions;
export default slice.reducer;
