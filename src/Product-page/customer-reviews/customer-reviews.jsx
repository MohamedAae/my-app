import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./customer-reviews.css";
import axios from "axios";
import { Helpers } from "../../shared/helpers";

const API_URL = "http://127.0.0.1:5003";
const CustomerReviews = (props) => {
  const userId = props.userId,
    bookId = props.productId,
    productImg = props.productImg,
    [showModal, setShowModal] = useState(false),
    [userReview, setUserReview] = useState({
      userId,
      bookId,
      productImg,
      rating: 0,
      title: "",
      review: "",
      date: new Date(),
    }),
    [rating, setRating] = useState(0),
    [hover, setHover] = useState(0),
    [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews();
  }, [reviews]);

  useEffect(() => {
    setUserReview({
      ...userReview,
      rating: rating,
    });
  }, [rating]);

  useEffect(() => {
    setUserReview({
      ...userReview,
      userId: userId,
    });
  }, [userId]);

  const getReviews = async () => {
    try {
      const res = await axios.get(`${API_URL}/reviews/${bookId}`);
      setReviews(res.data.reviews);
    } catch (err) {
      throw new Error(err);
    }
  };

  const changeDataHandler = (event, init) => {
    const value = event.target.value;
    switch (init) {
      case "title":
        setUserReview({
          ...userReview,
          title: value,
        });
        break;

      case "review":
        setUserReview({
          ...userReview,
          review: value,
        });
        break;

      default:
        break;
    }
  };

  const submitData = async (event) => {
    event.preventDefault();
    const token = Helpers.getToken();
    try {
      const res = await axios.post(`${API_URL}/reviews`, userReview, {
        headers: {
          "x-access-token": token,
        },
      });
      if (res.data.success) {
        return setShowModal(false);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <section className="w-11/12 mx-auto mt-5">
      <div className="block md:flex justify-between mb-10">
        <h1 className="text-3xl italic font-serif">Customer Reviews</h1>
        {userId ? (
          <button
            className="text-gray-100  w-8/12 py-3 text-center mt-4 md:text-start md:py-1 md:mt-1 md:w-3/12 xl:w-2/12 bg-background hoverable  capitalize text-sm mx-2 px-2 rounded-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <div className="block md:flex">
              <span className="px-2 py-2 mx-auto">Write A Review</span>
            </div>
          </button>
        ) : (
          ""
        )}
      </div>

      {showModal ? (
        <>
          <div className=" z-50 fixed flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white py-12 px-4 sm:px-6 lg:px-3">
            <div className="mr-5">
              <img src={productImg} alt="" width={150} height={100} />
            </div>
            <form onSubmit={(event) => submitData(event)} className="border-l">
              <div className="flex justify-between items-center pl-5">
                <h4 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Overall Rating
                </h4>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={(event) => {
                          setRating(index);
                          changeDataHandler(rating, "rating");
                        }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <span className="star text-xl">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs">Click To Rate!</p>
              </div>
              <div className="flex justify-between w-80 md:w-96 items-center my-5 pl-5">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-1/4"
                >
                  Review Title
                </label>
                <input
                  onChange={(event) => changeDataHandler(event, "title")}
                  value={userReview.title}
                  type="text"
                  id="default-input"
                  class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Review Title"
                  required
                />
              </div>
              <div className="flex justify-between items-center my-5 pl-5">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 w-1/4"
                >
                  Review
                </label>
                <textarea
                  onChange={(event) => changeDataHandler(event, "review")}
                  value={userReview.review}
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4"
                  required
                  minLength={50}
                  placeholder="Your Review..."
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  class="text-background focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center bg-theme hover:bg-theme-hover dark:focus:ring-blue-800 mt-5"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
          <div
            onClick={() => setShowModal(false)}
            className="opacity-25 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      ) : (
        ""
      )}
      {reviews.length ? (
        reviews.map((review) => {
          return (
            <div className="w-10/12 mx-auto">
              <section className=" lg:flex jusrify-center my-10">
                <div className="w-3/4 lg:w-1/4">
                  <h3 className="font-bold capitalize">{review.userId.name}</h3>
                  <p>{new Date(review.date).toLocaleString()}</p>
                </div>
                <div className="w-4/4 lg:w-3/4">
                  <div className="flex mt-2.5 mb-5">
                    {Helpers.displayRating(review.rating)}
                  </div>
                  <h2 className="font-bold capitalize">{review.title}</h2>
                  <p>{review.review}</p>
                </div>
              </section>
              <hr />
            </div>
          );
        })
      ) : (
        <p className="text-center text-xl text-background font-bold italic">
          “There is no reviews for this book”
        </p>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userId: state.user.user._id,
    productImg: state.products.product.image,
  };
};

export default connect(mapStateToProps)(CustomerReviews);
