import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getOrders} from "../../../redux/admin/admin.action";
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/solid";
import {Helpers} from "../../../shared/helpers";
import {NavLink} from "react-router-dom";

let orders = [];

const Orders = (props) => {

    useEffect(() => {
        props.getOrders();
    }, []);
    orders = props.orders ? props.orders : [];

    return (<>
        {orders.length ? orders.map(order => {
            return (<div
                className={`flex flex-col border-2 border-grey-600 rounded-lg shadow-b-sm`}>
                <header className={`p-5 flex justify-between items-center`}>
                    <div className={`inline-flex flex-row gap-5`}>
                        <div className={`inline-flex flex-col`}>
                                <span
                                    className={`text-black font-bold font-serif`}>Order Number</span>
                            <span
                                className={`text-gray-600 mt-1`}>{order._id}</span>
                        </div>
                        <div className={`inline-flex flex-col`}>
                                <span
                                    className={`text-black font-bold font-serif`}>Date Placed</span>
                            <span
                                className={`text-grey-600 mt-1`}>{new Date(order.date).toLocaleString()}</span>
                        </div>
                        <div className={`inline-flex flex-col`}>
                                <span
                                    className={`text-black font-bold font-serif`}>Total Amount</span>
                            <span
                                className={`text-grey-600 mt-1`}>546546</span>
                        </div>
                    </div>
                    <div className={`flex gap-4`}>
                        <div className={`inline-flex flex-col`}>
                                <span
                                    className={`text-black font-bold font-serif`}>User Name</span>
                            <span
                                className={`text-gray-600 mt-1 capitalize`}>{order.userId.name}</span>
                        </div>
                        <div className={`inline-flex flex-col`}>
                                <span
                                    className={`text-black font-bold font-serif`}>User Email</span>
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
                                        <h1 className={`font-black `}>{item.name}</h1>
                                        <p className={`font-black`}>${item.price}</p>
                                    </div>
                                    <p className={`mt-2 text-gray-600 lowercase`}>{item.description.slice(0, 250)} ...</p>
                                </div>
                            </div>
                            <footer
                                className={`flex justify-end items-center`}>
                                <NavLink to={`/product/%`}
                                         className={`text-purple-500 font-semibold`}>
                                    View Product
                                </NavLink>
                            </footer>
                        </div>
                        <hr className={`block w-full h-1/2 bg-background`}/>
                    </>)
                }) : ""}
                <div
                    className={`p-5 inline-flex justify-between items-center gap-3`}>
                    <div
                        className={`flex justify-center items-center`}>
                        <CheckCircleIcon width={25} height={25}
                                         className={`text-green-500`}></CheckCircleIcon>
                        Order Processing
                    </div>
                    <div className={`flex gap-2`}>
                        <button
                            className={`flex items-center justify-center rounded-sm border border-green-500 px-6 py-1 text-base font-medium text-green-900 uppercase`}>Approve
                        </button>
                        <button
                            className={`flex items-center justify-center rounded-sm border border-red-700 px-6 py-1 text-base font-medium text-red-900 shadow-sm uppercase`}>Decline
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
