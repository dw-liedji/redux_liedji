const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

export const bugAdded = (payload) => ({
  type: BUG_ADDED,
  payload: payload,
});

export const bugRemoved = (payload) => ({
  type: BUG_REMOVED,
  payload: payload,
});

export const bugResolved = (payload) => ({
  type: BUG_RESOLVED,
  payload: payload,
});

let lastId = 0;
function reducer(state = [], action) {
  if (action.type === BUG_ADDED)
    return [
      ...state,
      { id: ++lastId, description: action.payload.description },
    ];
  else if (action.type === BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === BUG_RESOLVED)
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, isResolved: true }
    );
  else return state;
}

export default reducer;
