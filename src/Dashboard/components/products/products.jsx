import {getProducts} from "../../../redux/products/products.action";
import {connect} from "react-redux";
import {useEffect} from "react";
import {Helpers} from "../../../shared/helpers";
import ProductsGrid
    from "../../../shared/components/products-grid/products-grid";

let products = [];

const Products = (props) => {

    useEffect(() => {
        props.getProducts();
    }, [])
    products = props.products;

    return (<>
        <ProductsGrid isAdmin={true} pageTitle={`Our Books`} />
    </>)
}

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (pageSize, page, filter, filterDirection, categoryId, discountRate) => {
            dispatch(getProducts(pageSize, page, filter, filterDirection, categoryId, discountRate));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
