import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configuredStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configuredStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <App />,
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
