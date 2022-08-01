import axios from "axios";
import { GETPRODUCTS } from "./products.types"

export const getProducts = ()=>{
  let data =	axios.get('http://127.0.0.1:5003/products').then( (res) => {
      return res.data.products
      console.log(data);
      }).catch((err) => console.error(err.message));
      return {
    type:GETPRODUCTS,
    products:data
}
}