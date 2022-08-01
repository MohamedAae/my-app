import {GETPRODUCTS} from "./products.types"
const initialState = {
    products:[],
    loading:true
}
 const reducer = ( state=initialState,action)=> {
    switch (action.type) {
        case GETPRODUCTS:
            return {
                ...state,
                products:action.products,
                loading:false
            }
        default:
            return state
    }
}

export default reducer