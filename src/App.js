import {Navigate, Route, Routes} from "react-router-dom";

import Navbar from "./shared/components/Navbar/nav-bar";
import Footer from "./shared/components/Footer/footer";
import Home from "./Home/screen/Home";
import ScrollToTop from "./shared/components/scroll-top/scroll-top";
import "./App.css";
import Product from "./Product-page/screen/Product";
import Shop from "./Shop/screen/Shop";
import Search from "./Search/screen/Search";
import ErrorPage from "./shared/components/error-page/error-page";
import CategoryBook from "./shared/components/categories-books/category-book";
import ShopByCategory
    from "./Home/components/shop-by-category/shop-by-category";
import UserAccount from "./shared/components/user-account/user-account";
import Checkout from "./Checkout/screen/Checkout";
import Dashboard from "./Dashboard/screen/Dashboard";
import EditProduct from "./Dashboard/components/edit-product/edit-product";
import Products from "./Dashboard/components/products/products";
import AddProduct from "./Dashboard/components/add-product/add-product";
import Orders from "./Dashboard/components/orders/orders";
import ThankYou from "./ThankYou/screen/thank-you";
import {Helpers} from "./shared/helpers";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {checkIfAdmin} from "./redux/users/users.action";


const layout = (component, hideCategories = false) => {
    return (<>
            <Navbar/>
            {component}
            {hideCategories ? null : <ShopByCategory/>}
            <Footer/>
        </>);
};

const App = (props) => {

    return (<>
            <ScrollToTop>
                <Routes>
                    <Route path="dashboard" element={<Dashboard/>}>
                        <Route path="reviews" element={<reviews/>}/>
                        <Route path="products" element={<Products/>}/>
                        <Route path="orders" element={<Orders/>}/>
                        <Route path="edit-product/:id" element={<EditProduct/>}/>
                        <Route path="add-product" element={<AddProduct/>}/>
                    </Route>
                    <Route exact path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={layout(<Home/>)}/>
                    <Route path="/shop" element={layout(<Shop/>)}/>
                    <Route path="/search/:keyword" element={layout(<Search/>)}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/thank-you" element={layout(<ThankYou/>, true)}/>
                    <Route path="/my-account" element={layout(<UserAccount/>)}/>
                    <Route path="/category/:id"
                           element={layout(<CategoryBook/>)}/>
                    <Route path="/c/:category">
                        <Route path=":id" element={layout(<Product/>)}/>
                    </Route>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </ScrollToTop>
        </>);
};

export default App;
