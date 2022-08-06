import React, { useEffect } from "react";
import  {useParams} from "react-router-dom"
import { connect } from "react-redux";
import { getCategories,getCategoryBooks } from "../../../redux/categories/categories.action";

let books=[];
const CategoryBook=(props)=>{

const params =useParams()

useEffect(() => {
    props.getCategoryBooks(params.id);
  }, []);
books=props.books
    return(
        <>
        <div> done </div>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
      books: state.categories.categoryBooks,
    };
  };
  
  let mapDispatchToProps = (dispatch) => {
    return {
      getCategoryBooks:(id)=>dispatch(getCategoryBooks(id))
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(CategoryBook);
