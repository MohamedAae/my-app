import {GETCATEGORIES,GETCATEGORIYBOOKS} from "./categories.types";
import axios from "axios";

export const getCategories = () => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/categories`);
        dispatch({
            type    : GETCATEGORIES,
            categories  : res.data.categories
        })
    } catch (err) {
        console.log(err);
    }
}
export const getCategoryBooks = (id) => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/categories/category-products/${id}`);
        dispatch({
            type    : GETCATEGORIYBOOKS,
            categoryBooks  : res.data.category
        })
    } catch (err) {
        console.log(err);
    }
}