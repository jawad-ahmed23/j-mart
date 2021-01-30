import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(rootReducer, compose(applyMiddleware(logger)));
