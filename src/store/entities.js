import { combineReducers } from "redux";
import bugReducer from "./bugs";
import projectReducer from "./projects";
const reducer = combineReducers({
  bugs: bugReducer,
  projects: projectReducer,
});

export default reducer;
