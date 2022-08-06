import {GETCATEGORIES} from "./categories.types";
const intialState = {
    loading : true,
    categories  : []
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case GETCATEGORIES:
            return({
                ...state,
                loading : false,
                categories  : action.categories
            })

        default:
            return state;
    }
}

export default reducer;