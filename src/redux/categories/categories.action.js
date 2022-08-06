import {GETCATEGORIES} from "./categories.types";
import axios from "axios";

export const getCategories = () => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/categories`);
        console.log(res,"fd");
        dispatch({
            type    : GETCATEGORIES,
            categories  : res.data.categories
        })
    } catch (err) {
        console.log(err);
    }
}