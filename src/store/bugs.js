import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      // writing regular mutating code here
      state.push({ id: ++lastId, description: action.payload.description });
    },
    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].isResolved = true;
    },
    bugRemoved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});
console.log(slice);

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
export default slice.reducer;
