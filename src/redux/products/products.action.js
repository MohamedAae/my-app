import axios from "axios";
import {GETPRODUCTS, GETPRODUCTBYID, GETBESTBOOKS} from "./products.types"

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/products`)
        dispatch({
            type: GETPRODUCTS,
            products: res.data.products
        })
    } catch (e) {
        console.log(e.message);
    }
}

export const getBestBooks=()=> async dispatch=>{
    try {
        const res = await axios.get(`http://127.0.0.1:5003/products/best-seller`)
        dispatch({
            type: GETBESTBOOKS,
            bestSellerBooks: res.data.bestSellerBooks
        })
    } catch (e) {
        console.log(e.message);
    }
}

export const getProductById = (id) => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/products/${id}`);
        dispatch({
            type: GETPRODUCTBYID,
            product: res.data.product
        })
    } catch (e) {
        console.log(e.message);
    }
}
