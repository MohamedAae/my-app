import { ADDTOCART, EDITCARTITEM, REMOVEFROMCART } from "./cart.types"

const initialState = {
    cartItems   : [],
    totalPrice  : 0,
    totalItems  : 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOCART :
            return ({
                ...state,
                cartItems   : handleQuantity(state.cartItems, action.book, true),
                totalPrice  : state.totalPrice + action.book.price,
                totalItems  : state.cartItems.length
            })

        case EDITCARTITEM :
            return ({
                ...state,
                cartItems   : handleQuantity(state.cartItems, action.id, false),
                totalPrice  : state.totalPrice - action.price,
                totalItems  : state.cartItems.length,
            })

        case REMOVEFROMCART :
            const currentQuantity = getQuantity(state.cartItems, action.id);
            return ({
                ...state,
                cartItems   : state.cartItems.filter((item) => {
                    return item._id !== action.id;
                }),
                totalPrice  : state.totalPrice - (currentQuantity * action.price),
                totalItems  : state.cartItems.length - 1,
            })

        default:
            return state;
    }
}

const getQuantity = (cartItems, bookId) => {
    const book = cartItems.filter((item) => {
        return item._id === bookId;
    });
    return book[0].quantity;
}


const handleQuantity = (arr, book, isAdd) => {
    let flag = true;
    arr.map((item) => {
        if (item._id === book._id && isAdd) {
            item.quantity = item.quantity + 1;
            flag = false;
        }

        if (item._id === book && !isAdd) {
            switch (item.quantity) {
                case 1:
                    arr = arr.filter((item) => {
                        return item._id !== book
                    });
                    flag = false;
                    break;

                default:
                    item.quantity = item.quantity - 1;
                    flag = false;
                    break;
            }
        }
    })

    if (flag && isAdd) {
        book.quantity = 1;
        arr.push(book);
    }

    if (flag && !isAdd) {
        arr = arr.filter((item) => {
            return item._id !== book;
        });
    }

    return arr;
}

export default reducer;