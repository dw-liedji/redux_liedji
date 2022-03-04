import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
const configuredStore = () =>
  configureStore({
    reducer: reducer,
    middleware: [logger("Console")],
  });
export default configuredStore;
