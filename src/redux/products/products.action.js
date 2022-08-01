import axios from "axios";
import { GETPRODUCTS } from "./products.types"



// () => async dispatch => {
    
//   try{
//       const res = await axios.get(`http://127.0.0.1:5003/products`)
//       dispatch( {
//           type: GETPRODUCTS,
//           products: res.data.products
//       })
//   }
//   catch(e){
//      console.log(e);
//   }


export const getProducts = () => async dispatch => {
    
  try{
      const res = await axios.get(`http://127.0.0.1:5003/products`)
      dispatch( {
          type: GETPRODUCTS,
          products: res.data.products
      })
  }
  catch(e){
     console.log(e.message);
  }
}
