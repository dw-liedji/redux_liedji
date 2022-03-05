import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import error from "./middleware/toast";
import api from "./middleware/api";
const configuredStore = () =>
  configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware(), logger("Console"), error, api],
  });
export default configuredStore;
