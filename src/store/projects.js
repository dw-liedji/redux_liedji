import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      // writing regular mutating code here
      state.push({ id: ++lastId, description: action.payload.description });
    },
    projectResolved: (state, action) => {
      const index = state.findIndex(
        (project) => project.id === action.payload.id
      );
      state[index].isResolved = true;
    },
    projectRemoved: (state, action) => {
      const index = state.findIndex(
        (project) => project.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const { projectAdded, projectResolved, projectRemoved } = slice.actions;
export default slice.reducer;
