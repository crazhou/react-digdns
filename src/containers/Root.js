import React from "react";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import AsyncApp from "./AsyncApp";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}

export default Root;
