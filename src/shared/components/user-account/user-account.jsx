import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

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

  console.log(reviews);

  return (
    <section className="w-11/12 mx-auto">
      <h1 className="px-4 py-6 text-3xl italic font-serif">My Account</h1>
      <div className="flex w-10/12 mx-auto">
        <div className="flex flex-col w-1/4">
          <img
            className="w-1/2 "
            src="https://flowbite.com/application-ui/demo/images/users/jese-leos-2x.png"
            alt=""
          />
          <div className="py-2 text-serif">
            <p className="text-gray-500">user name</p>
            <p>hamada</p>
          </div>
          <div className="py-2 text-serif">
            <p className="text-gray-500">Email</p>
            <p>hamada@123.com</p>
          </div>
          <div className="py-2 text-serif">
            <p className="text-gray-500">Phone Number</p>
            <p>01212121212</p>
          </div>
        </div>
        <div className="w-3/4 bg-gray-300">
          <h1 className="px-4 py-6 text-3xl italic font-serif underline">
            My Reviews
          </h1>
          {reviews.length
            ? reviews.map((item) => {
                return (
                  <div>
                    <h3>{item.bookId.name}</h3>
                    <span>{item.bookId.rating}</span>
                    <h3>{item.title}</h3>
                    <p>{item.review}</p>
                    <p>{new Date(item.date).toLocaleString()}</p>
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
  };
};

export default connect(mapStateToProps)(UserAccount);
