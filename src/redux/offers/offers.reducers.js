import {GETOFFERS} from "./offers.types";

const intialState = {
    loading : true,
    offers  : []
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case GETOFFERS:
            return({
                ...state,
                loading : false,
                offers  : action.offers
            })

        default:
            return state;
    }
}

export default reducer;
