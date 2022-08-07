import { SEARCHPRODUCTS } from "./search.types";

const initialState = {
  searchResult: [],
  searchResultLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHPRODUCTS:
      return {
        ...state,
        searchResult: action.searchResult,
        searchResultLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
