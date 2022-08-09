import { SEARCHPRODUCTS } from "./search.types";

const initialState = {
  searchResult: [],
  totalResults: 0,
  searchResultLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHPRODUCTS:
      return {
        ...state,
        searchResult: action.searchResult,
        totalResults: action.totalResults,
        searchResultLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
