import {GETREVIEWS, GETORDERS} from "./admin.types";
import axios from "axios";

export const getReviews = () => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/reviews`);
        dispatch({
            type: GETREVIEWS,
            reviews: res.data.reviews,
        });
    } catch (e) {
        console.log(e.message);
    }
}

export const getOrders = () => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/orders`);
        dispatch({
            type: GETORDERS,
            orders: res.data.orders,
        });
    } catch (e) {
        console.log(e.message);
    }
}