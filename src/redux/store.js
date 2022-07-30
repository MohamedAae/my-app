import { createStore, applyMiddleware } from "redux";
import promiseMW from "redux-promise";

const store = applyMiddleware(promiseMW)(createStore);

export default store;
