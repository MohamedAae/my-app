import { combineReducers } from "redux";

import productsReducers from "./products/products.reducer";
import userReducer from "./users/users.reducer";
import offersReducer from "./offers/offers.reducers";
import categoriesReducer from "./categories/categories.reducers"
import cartReducer from "./cart/cart.reducers"

const rootReducer = combineReducers({
  products  : productsReducers,
  user      : userReducer,
  offers    : offersReducer,
  categories: categoriesReducer,
  cart      : cartReducer,
});

export default rootReducer;
