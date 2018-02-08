import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import todoApp from "./reducers";
import { createLogger } from "redux-logger";

const middleware = [createLogger()];

let store = createStore(todoApp, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
