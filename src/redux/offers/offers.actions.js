import {GETOFFERS} from "./offers.types";
import axios from "axios";

export const getOffers = () => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:5003/offers`);
        dispatch({
            type    : GETOFFERS,
            offers  : res.data.offers
        })
    } catch (err) {
        console.log(err);
    }
}