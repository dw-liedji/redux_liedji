import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";
const configuredStore = () => configureStore({ reducer: reducer });
export default configuredStore;
