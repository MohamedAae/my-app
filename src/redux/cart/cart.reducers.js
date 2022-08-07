import {ADDTOCART,REMOVEFROMCART} from "./cart.types"

const intialState ={
    cartItems  : [],
    totalPrice : 0,
    totalItems : 0,
    
}

const reducer = (state = intialState , action) =>{
    switch(action.type){
        case ADDTOCART :
            
            return ({
                ...state,
                cartItems : handalquantity(state.cartItems,action.book),
                totalPrice : state.totalPrice + action.book.price,
                totalItems : state.totalItems + 1
            })
        case REMOVEFROMCART :
            return ({
                ...state,
                cartItems : state.cartItems.filter((item)=>{
                   return item._id !== action.id
                }),
                totalPrice : state.totalPrice - action.price,
                totalItems : state.totalItems - 1,
            })
        default:
            return state;
    }



} 

const handalquantity=(arr,book)=>{
   let flag=true
   arr.map((itms)=>{
    if(itms._id==book._id){
      itms.quantity=itms.quantity+1
      flag =false
    
    }
   })
    if(flag){
    book.quantity=1
    arr.push(book)
    console.log(arr)
     
    }
return arr  
    
}


export default reducer;