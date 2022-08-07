import { ADDTOCART, EDITCARTITEM, REMOVEFROMCART } from "./cart.types";

export const AddToCart = (book)=>{
    return ({
        type : ADDTOCART,
        book,
    })
}

export const EditCartItem = (id,price)=>{
    return ({
        type : EDITCARTITEM,
        id,
        price,
    })
}

export const RemoveFromCart = (id,price)=>{
    return ({
        type : REMOVEFROMCART,
        id,
        price,
    })
}