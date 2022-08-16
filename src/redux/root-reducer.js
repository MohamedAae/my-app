import { combineReducers } from "redux";

import productsReducers from "./products/products.reducer";
import userReducer from "./users/users.reducer";
import offersReducer from "./offers/offers.reducers";
import categoriesReducer from "./categories/categories.reducers";
import cartReducer from "./cart/cart.reducers";
import searchReducer from "./search/search.reducer";
import adminReducer from "./admin/admin.reducer";

const rootReducer = combineReducers({
  products: productsReducers,
  user: userReducer,
  offers: offersReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  search: searchReducer,
  admin: adminReducer
});

export default rootReducer;
