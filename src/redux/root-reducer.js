import { combineReducers } from "redux";
import productsReducers from "./products/products.reducer"

const rootReducer = combineReducers({
  products:productsReducers
});

export default rootReducer;
