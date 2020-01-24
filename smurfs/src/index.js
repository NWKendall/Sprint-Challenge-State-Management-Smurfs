import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { RootReducer } from "./reducers"

import App from "./components/App";

const store = createStore(RootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root"));
