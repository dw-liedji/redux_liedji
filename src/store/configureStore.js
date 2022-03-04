import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import error from "./middleware/toast";
const configuredStore = () =>
  configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware(), logger("Console"), error],
  });
export default configuredStore;
