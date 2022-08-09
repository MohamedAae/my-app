import axios from "axios";
import { SEARCHPRODUCTS } from "./search.types";

export const searchProducts = (keyword, page, pageSize) => async (dispatch) => {
  const p = page ? `page=${page}` : "",
      ps  = pageSize ? `&pageSize=${pageSize}` : "";

  try {
    const res = await axios.get(`http://127.0.0.1:5003/search/${keyword}?${p}${ps}`);
    dispatch({
      type: SEARCHPRODUCTS,
      searchResult: res.data.searchResult,
      totalResults: res.data.totalResults,
    });
  } catch (e) {
    console.log(e.message);
  }
};
