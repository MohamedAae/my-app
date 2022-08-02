import { combineReducers } from "redux";
import productsReducers from "./products/products.reducer";
import userReducer from "./users/users.reducer";

const rootReducer = combineReducers({
  products: productsReducers,
  user: userReducer,
});

export default rootReducer;
