import {GETCATEGORIES,GETCATEGORIYBOOKS} from "./categories.types";
const intialState = {
    loading : true,
    categories  : [],
     loadingCategoryBooks : true,
    categoryBooks  : []
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case GETCATEGORIES:
            return({
                ...state,
                loading : false,
                categories  : action.categories
            })
                case GETCATEGORIYBOOKS:
            return({
                ...state,
                loadingCategoryBooks : false,
                categoryBooks  : action.categoryBooks
            })
        default:
            return state;
    }
}

export default reducer;