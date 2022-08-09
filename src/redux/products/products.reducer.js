import {
  GETPRODUCTS,
  GETPRODUCTBYID,
  GETBESTBOOKS,
  GETDISCOUNTBOOKS,
} from "./products.types";
import {getdiscountbook} from "./products.action";

const initialState = {
  product: {},
  productLoading: true,
  products: [],
  count: 0,
  productsLoading: true,
  bestSellerBooks: [],
  bestSellerBooksLoading: true,
  discountbook: {},
  discountbookLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODUCTS:
      return {
        ...state,
        products: action.products,
        count: action.count,
        loading: false,
      };
    case GETPRODUCTBYID:
      return {
        ...state,
        product: action.product,
        productLoading: false,
      };
    case GETBESTBOOKS:
      return {
        ...state,
        bestSellerBooks: action.bestSellerBooks,
        bestSellerBooksLoading: false,
      };

    case GETDISCOUNTBOOKS:
      return {
        ...state,
        discountbook: {
          ...state.discountbook,
          [action.rate]: action.discountbook
        },
        discountbookLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;