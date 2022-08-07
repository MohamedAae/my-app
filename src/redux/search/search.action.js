import axios from "axios";
import { SEARCHPRODUCTS } from "./search.types";

export const searchProducts = (keyword) => async (dispatch) => {
  try {
    const res = await axios.get(`http://127.0.0.1:5003/search/${keyword}`);
    // console.log(res.data);
    dispatch({
      type: SEARCHPRODUCTS,
      searchResult: res.data.searchResult,
    });
  } catch (e) {
    console.log(e.message);
  }
};
