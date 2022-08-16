import {TrashIcon} from "@heroicons/react/solid";
import {Helpers} from "../../../shared/helpers";
import React, {useState, useEffect} from "react";
import axios from "axios";
import {getReviews} from "../../../redux/admin/admin.action";
import {connect} from "react-redux";

let reviews = [];

const Reviews = (props) => {

    const [deleted, setDeleted] = useState(true);
    useEffect(() => {
        props.getReviews();
        setDeleted(false);
    }, [deleted]);
    reviews = props.reviews;

    const deleteReview = async (reviewId) => {
        try {
            const res = await axios.delete(`http://127.0.0.1:5003/reviews/${reviewId}`);
            setDeleted(true);
        } catch (e) {
            throw new Error(e);
        }
    }

    return(
        <div className="w-full">
            {
                reviews.length ?
                    <div
                        className="bg-gray-100 my-5 rounded-md md:w-11/12 w-full py-5 mx-auto">
                        <h1 className={`text-xl font-serif font-black text-background`}>Reviews: {reviews.length}</h1>
                    </div>
                    :
                    ""
            }
            {reviews.length ?
                reviews.map((item) => {
                    return (<div
                            className="bg-gray-100 my-5 rounded-md md:w-11/12 w-full py-5 mx-auto">
                            <div
                                className="md:w-11/12 mx-auto lg:flex lg:justify-between">
                                <div className="lg:w-1/5 ">
                                    <img
                                        className="mx-auto"
                                        src={item.bookId.image}
                                        alt=""
                                        width={200}
                                        height={300}
                                    />
                                </div>
                                <div className="md:w-4/5 pl:2 md:pl-5 ">
                                    <div className={`flex flex-row justify-between`}>
                                        <h3 className="text-xl font-serif my-5 text-background ">
                                            {item.bookId.name}
                                        </h3>
                                        <span
                                            onClick={() => deleteReview(item._id)}
                                            className={`cursor-pointer bg-white shadow-md rounded-md px-2 inline-flex justify-center items-center`}
                                        >
                                                    <TrashIcon className={`text-dark-red`} width={25} height={25}></TrashIcon>
                                                </span>
                                    </div>
                                    <div className="flex">
                          <span className="font-semibold text-gray-500 mr-2">
                            My Rate:{" "}
                          </span>
                                        <span
                                            className="flex justify-start items-center">
                            {Helpers.displayRating(item.bookId.rating)}
                          </span>
                                    </div>
                                    <div className="flex">
                          <span className="font-semibold text-gray-500 mr-2">
                            Title:
                          </span>
                                        <h3>{item.title}</h3>
                                    </div>
                                    {" "}
                                    <div className="md:flex">
                          <span className="font-semibold text-gray-500 mr-2">
                            Review:
                          </span>
                                        <p className="px-2">{item.review.slice(0, 300)}</p>
                                    </div>
                                    <div className="flex">
                          <span className="font-semibold text-gray-500 mr-2">
                            Date :
                          </span>
                                        <p>{new Date(item.date).toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }) : ""}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        reviews: state.admin.reviews,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getReviews: () => dispatch(getReviews()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
