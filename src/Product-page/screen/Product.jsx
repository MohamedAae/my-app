import React from "react";
import ProductDtl from "../product-dtl/product-dtl";
import {useParams} from "react-router-dom";

export default function Product() {
    const {id} = useParams();

    return (
        <div>
            <ProductDtl productId={id} />
        </div>
    );
}
