import React, {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {Helpers} from "../../shared/helpers";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../components/welcome/welcome";
import Reviews from "../components/reviews/reviews";
import Products from "../components/products/products";
import EditProduct from "../components/edit-product/edit-product";
import AddProduct from "../components/add-product/add-product";
import Orders from "../components/orders/orders";
import DashboardLanding from "../components/landing/landing";
import {checkIfAdmin} from "../../redux/users/users.action";

let userName;
const API_URL = "http://127.0.0.1:5003";
const userId = Helpers.getUser()?._id ? Helpers.getUser()._id : false;
const token = Helpers.getToken();

const Dashboard = (props) => {

    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        props.checkIfAdmin(userId, token);
    }, []);

    useEffect(() => {
        if (props.permissionChecked) {
            if (!props.isAdmin) navigate("/");
            setChecked(true);
        }
    }, [props.isAdmin, props.permissionChecked]);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    userName = props.user.name ? props.user.name : Helpers.getUser().name;

    return (!checked ? "" : <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div
                className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header name={userName} sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}/>

                <main>
                    <div
                        className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <WelcomeBanner userName={userName}/>
                        <Routes>
                            <Route path={`/`} element={<DashboardLanding/>}/>
                            <Route path={`reviews`} element={<Reviews/>}/>
                            <Route path={`products`} element={<Products/>}/>
                            <Route path={`edit-product/:id`}
                                   element={<EditProduct/>}/>
                            <Route path={`add-product`}
                                   element={<AddProduct/>}/>
                            <Route path={`orders`} element={<Orders/>}/>
                        </Routes>
                    </div>
                </main>
            </div>
        </div>);
};

let mapStateToProps = (state) => {
    return {
        user: state.user.user,
        isAdmin: state.user.isAdmin,
        permissionChecked: state.user.permissionChecked,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        checkIfAdmin: (userId, token) => dispatch(checkIfAdmin(userId, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
