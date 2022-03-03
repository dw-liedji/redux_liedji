import { createAction, createReducer } from "@reduxjs/toolkit";

export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

let lastId = 0;
const reducer = createReducer([], {
  [bugAdded.type]: (state, action) => {
    // writing regular mutating code here
    state.push({ id: ++lastId, description: action.payload.description });
  },
  [bugResolved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].isResolved = true;
  },
  [bugRemoved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state.splice(index, 1);
  },
});

export default reducer;
