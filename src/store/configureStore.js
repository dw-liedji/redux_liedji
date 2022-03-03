import { configureStore } from "@reduxjs/toolkit";
import reducer from "./projects";
const configuredStore = () => configureStore({ reducer: reducer });
export default configuredStore;
