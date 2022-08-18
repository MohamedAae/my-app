import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getOrders} from "../../../redux/admin/admin.action";
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/solid";
import {NavLink} from "react-router-dom";
import axios from "axios";

let orders = [];

const Orders = (props) => {

    const [ordersUpdated, setOrdersUpdated] = useState(false);

    useEffect(() => {
        props.getOrders();
        setOrdersUpdated(false);
    }, [ordersUpdated]);
    orders = props.orders ? props.orders : [];

    const setOrderStatus = async (orderId, newStatus) => {
        try {
            const res = await axios.patch(`http://127.0.0.1:5003/orders/${orderId}`, {status: newStatus});
            setOrdersUpdated(true);
        } catch (e) {
            throw new Error(e);
        }
    }

    return (<>
        {orders.length ? orders.map(order => {
            return (<div
                className={`flex flex-col border-2 ${order.status === "cancelled" ? "border-red-400" : "border-grey-600"} ${order.status === "processing" ? "border-green-400" : "border-grey-600"} rounded-lg shadow-b-sm mb-7`}>
                <header
                    className={`p-5 flex justify-between items-center text-sm`}>
                    <div className={`inline-flex flex-row gap-7`}>
                        <div className={`inline-flex flex-col`}>
                                <span
                                    className={`text-black font-bold`}>Order Number</span>
                            <span
                                className={`text-gray-500 mt-1`}>{order._id}</span>
                        </div>
                        <div className={`inline-flex flex-col`}>
                                <span
                                    className={`text-black font-bold`}>Date Placed</span>
                            <span
                                className={`text-grey-500 mt-1`}>{new Date(order.date).toLocaleString()}</span>
                        </div>
                        {/*<div className={`inline-flex flex-col`}>*/}
                        {/*        <span*/}
                        {/*            className={`text-black font-bold`}>Total Amount</span>*/}
                        {/*    <span*/}
                        {/*        className={`text-grey-500 mt-1`}>546546</span>*/}
                        {/*</div>*/}
                    </div>
                    <div className={`flex gap-4`}>
                        <div className={`inline-flex flex-col`}>
                                <span
                                    className={`text-black font-bold`}>User Name</span>
                            <span
                                className={`text-gray-600 mt-1 capitalize`}>{order.userId.name}</span>
                        </div>
                        <div className={`inline-flex flex-col`}>
                                <span
                                    className={`text-black font-bold`}>User Email</span>
                            <span
                                className={`text-gray-600 mt-1`}>{order.userId.email}</span>
                        </div>
                    </div>
                </header>
                <hr className={`block w-full h-1/2 bg-background`}/>
                {order.items ? order.items.map(item => {
                    return (<>
                        <div className={`p-5 flex flex-col gap-5`}>
                            <div className={`flex`}>
                                <img
                                    height={150}
                                    width={100}
                                    src={item.image}
                                    className={`rounded-md`}
                                />
                                <div
                                    className={`ml-5 min-h-full flex flex-col justify-around`}>
                                    <div
                                        className={`flex justify-between w-full`}>
                                        <h1 className={`font-bold`}>{item.name}</h1>
                                        <p className={`font-bold text-gray-600`}>${item.price}</p>
                                    </div>
                                    <p className={`mt-2 text-gray-600 lowercase text-sm`}>{item.description.slice(0, 170)} ...</p>
                                    <NavLink
                                        to={`/c/${item.categoryId.url}/${item._id}`}
                                        className={`text-purple-500 font-medium text-sm ml-auto`}
                                    >
                                        View Product
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <hr className={`block w-full h-1/2 bg-background`}/>
                    </>)
                }) : ""}
                <div
                    className={`p-5 inline-flex justify-between items-center gap-3 capitalize`}>
                    <div
                        className={`flex justify-center items-center text-sm font-medium`}>
                        {order.status === 'cancelled' ? <XCircleIcon
                            width={25}
                            height={25}
                            className={`text-red-500`}
                        ></XCircleIcon> : order.status === 'processing' ?
                            <CheckCircleIcon
                                width={25}
                                height={25}
                                className={`text-green-500`}
                            ></CheckCircleIcon> : ""}
                        Order {order.status ? order.status : "pending"}
                    </div>
                    <div className={`flex gap-2`}>
                        <button
                            onClick={() => setOrderStatus(order._id, "processing")}
                            className={`flex items-center justify-center rounded-sm border border-green-500 px-4 py-1 font-medium text-green-900 uppercase text-sm`}
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => setOrderStatus(order._id, "cancelled")}
                            className={`flex items-center justify-center rounded-sm border border-red-700 px-4 py-1 font-medium text-red-900 shadow-sm uppercase text-sm`}
                        >Decline
                        </button>
                    </div>
                </div>
            </div>)
        }) : ""

        }

    </>)
}

let mapStateToProps = (state) => {
    return {
        orders: state.admin.orders,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => dispatch(getOrders()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
