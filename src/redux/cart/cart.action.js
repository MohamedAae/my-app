import {ADDTOCART,REMOVEFROMCART} from "./cart.types";

export const AddToCart = (book)=>{
    return ({
        type : ADDTOCART,
        book,
    })
}
export const RemoveFromCart = (id,price)=>{
    return ({
        type : REMOVEFROMCART,
        id,
        price,
    })
}