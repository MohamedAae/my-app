import {GETPRODUCTS} from "./products.types"

 const reducer = ( state=[],action)=> {
    switch (action.type) {
        case GETPRODUCTS:
            return action.products
        default:
            return state
    }
}

export default reducer