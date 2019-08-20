import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//redux imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import reducer
import { smurfReducer } from "./reducers";
// import thunk
import thunk from "redux-thunk";
//devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  smurfReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
