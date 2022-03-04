import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import userReducer from "./users";

const reducer = combineReducers({
  entities: entitiesReducer,
  users: userReducer,
});

export default reducer;
