import { combineReducers } from "redux";

import productsReducers from "./products/products.reducer";
import userReducer from "./users/users.reducer";
import offersReducer from "./offers/offers.reducers";

const rootReducer = combineReducers({
  products  : productsReducers,
  user      : userReducer,
  offers    : offersReducer
});

export default rootReducer;
