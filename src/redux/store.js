import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

const middleware = [thunk],
    store = applyMiddleware(...middleware)(createStore);

export default store;
