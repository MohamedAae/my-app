import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getProducts } from '../../../redux/products/products.action';

let allBooks=[];

const  Grid=(props)=> {

    useEffect(()=>{
        props.getAllBooks()
    },[])
     console.log( allBooks=props.products)
  return (
    <>
    <div>
        
    </div>
    </>
  )
}

let mapStateToProps = (state) => {
    return {
      products: state.products.products,
    };
  };
  
  let mapDispatchToProps = (dispatch) => {
    return {
      getAllBooks: () => dispatch(getProducts()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Grid);
  
