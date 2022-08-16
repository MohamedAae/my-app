import axios from "axios";
import {
    GETPRODUCTS, GETPRODUCTBYID, GETBESTBOOKS, GETDISCOUNTBOOKS,
} from "./products.types";

export const getProducts = (pageSize = 0, page = 0, filter = "", dir = "", categoryId = [], discountRate = 0) => async (dispatch) => {
    try {
        let categoriesQuery = "";
        (() => {
            categoryId && categoryId.forEach((id) => categoriesQuery += `&categoryId=${id}`)
        })();

        const res = await axios.get(`http://127.0.0.1:5003/products?pageSize=${pageSize}&page=${page}&filter=${filter}&dir=${dir}${categoriesQuery}&dr=${discountRate}`);
        dispatch({
            type: GETPRODUCTS,
            products: res.data.products,
            count: res.data.count,
        });
    } catch (e) {
        console.log(e.message);
    }
};

export const getBestBooks = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/products/best-seller`);
        dispatch({
            type: GETBESTBOOKS, bestSellerBooks: res.data.bestSellerBooks,
        });
    } catch (e) {
        console.log(e.message);
    }
};

export const getProductById = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/products/${id}`);
        dispatch({
            type: GETPRODUCTBYID, product: res.data.product,
        });
    } catch (e) {
        console.log(e.message);
    }
};

export const getdiscountbook = (rate) => async (dispatch) => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/products/discount/${rate}`);
        dispatch({
            type: GETDISCOUNTBOOKS,
            discountbook: res.data.discontbook,
            rate: rate,
        });
    } catch (e) {
        console.log(e.message);
    }
};