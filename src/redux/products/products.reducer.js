import {GETPRODUCTS, GETPRODUCTBYID} from "./products.types"

const initialState = {
    product         : {},
    productLoading  : true,
    products        : [],
    productsLoading : true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETPRODUCTS:
            return {
                ...state,
                products    : action.products,
                loading     : false
            }
        case GETPRODUCTBYID:
            return {
                ...state,
                product         : action.product,
                productLoading  : false
            }
        default:
            return state
    }
}

export default reducer