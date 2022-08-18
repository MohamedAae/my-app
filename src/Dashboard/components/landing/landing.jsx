import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { Helpers } from "../../../shared/helpers";

const API_URL = "http://127.0.0.1:5003";
let userId;

const DashboardLanding = (props) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        userId = props.userId;
    }, [props.userId]);

    return (
        <section className="md:w-11/12 mx-auto">
            <h1 className="px-4 py-6 text-3xl italic font-serif text-center md:text-left">
                My Account
            </h1>
            <div className="lg:flex lg:w-10/12 w-11/12 mx-auto">
                <div className="md:flex lg:flex-col lg:w-1/4 md:w-11/12 mx-auto lg:pl-5 pt-5">
                    <div>
                        <img
                            className="lg:w-1/2 md:w-3/4 w-full "
                            src="https://flowbite.com/application-ui/demo/images/users/jese-leos-2x.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="py-2 text-serif">
                            <p className="text-gray-500">User Name</p>
                            <p className="capitalize">{props.userName}</p>
                        </div>
                        <div className="py-2 text-serif">
                            <p className="text-gray-500">Email</p>
                            <p>{props.userEmail}</p>
                        </div>
                        <div className="py-2 text-serif">
                            <p className="text-gray-500">Phone Number</p>
                            <p>01212121212</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        userId: state.user.user._id,
        userName: state.user.user.name,
        userEmail: state.user.user.email,
    };
};

export default connect(mapStateToProps)(DashboardLanding);
