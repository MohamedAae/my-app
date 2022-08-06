import {GETPRODUCTS, GETPRODUCTBYID,GETBESTBOOKS} from "./products.types"

const initialState = {
    product         : {},
    productLoading  : true,
    products        : [],
    productsLoading : true,
    bestSellerBooks:[],
    bestSellerBooksLoading:true,
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
            case GETBESTBOOKS:
                return {
                    ...state,
                    bestSellerBooks:action.bestSellerBooks,
                    bestSellerBooksLoading:false
                }
        default:
            return state
    }
}

export default reducer