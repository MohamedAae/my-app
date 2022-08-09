import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { Helpers } from "../../helpers";

const API_URL = "http://127.0.0.1:5003";
let userId;

const UserAccount = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    userId = props.userId;
    getReviews();
  }, [props.userId]);

  const getReviews = async () => {
    try {
      const res = await axios.get(`${API_URL}/reviews/user/${userId}`);

      setReviews(res.data.reviews);
    } catch (err) {
      throw new Error(err);
    }
  };

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
        <div className="lg:w-3/4">
          <h1 className="lg:px-4 py-6 text-2xl italic font-serif ">
            My Reviews
          </h1>
          <hr />
          {reviews.length
            ? reviews.map((item) => {
                return (
                  <div className="bg-gray-100 shadow-lg my-5 rounded-md md:w-11/12 w-full py-5 mx-auto">
                    <div className="md:w-11/12 mx-auto lg:flex lg:justify-between">
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
                        <div>
                          <h3 className="text-xl font-serif my-5 text-background ">
                            {item.bookId.name}
                          </h3>
                        </div>
                        <div className="flex">
                          <span className="font-semibold text-gray-500 mr-2">
                            My Rate:{" "}
                          </span>
                          <span className="flex justify-start items-center">
                            {Helpers.displayRating(item.bookId.rating)}
                          </span>
                        </div>
                        <div className="flex">
                          <span className="font-semibold text-gray-500 mr-2">
                            Title:
                          </span>
                          <h3>{item.title}</h3>
                        </div>{" "}
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
              })
            : ""}
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

export default connect(mapStateToProps)(UserAccount);
