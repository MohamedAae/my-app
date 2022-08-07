import React, { useState } from "react";
import "./customer-reviews.css";

export default function CustomerReviews() {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const reviews = [
    {
      name: "My Opinion",
      rate: 3,
      title: "helpful",
      discreption:
        'I had seen the movie years ago, but having recently visited Savannah, and a ghost tour, my interest was piqued to learn more about this story. The city is exactly as depicted in the book; historic, gentile, gracious, and yet with a very dark feel. The only way to understand it is to experience it. "The Book" offers a beautiful glimpse of this jewel in Georgia.',
    },
    {
      name: "My Opinion",
      rate: 5,
      title: "helpful",
      discreption:
        'I had seen the movie years ago, but having recently visited Savannah, and a ghost tour, my interest was piqued to learn more about this story. The city is exactly as depicted in the book; historic, gentile, gracious, and yet with a very dark feel. The only way to understand it is to experience it. "The Book" offers a beautiful glimpse of this jewel in Georgia.',
    },
    {
      name: "My Opinion",
      rate: 2,
      title: "poring",
      discreption:
        'I had seen the movie years ago, but having recently visited Savannah, and a ghost tour, my interest was piqued to learn more about this story. The city is exactly as depicted in the book; historic, gentile, gracious, and yet with a very dark feel. The only way to understand it is to experience it. "The Book" offers a beautiful glimpse of this jewel in Georgia.',
    },
    {
      name: "My Opinion",
      rate: 4,
      title: "poring",
      discreption:
        'I had seen the movie years ago, but having recently visited Savannah, and a ghost tour, my interest was piqued to learn more about this story. The city is exactly as depicted in the book; historic, gentile, gracious, and yet with a very dark feel. The only way to understand it is to experience it. "The Book" offers a beautiful glimpse of this jewel in Georgia.',
    },
  ];
  function forloop(bookRating) {
    let starsarr = [],
      color;
    for (let i = 0; i < 5; i++) {
      color = "text-gray-300";
      if (bookRating > i) {
        color = "text-yellow-300";
      }
      starsarr.push(
        <svg
          aria-hidden="true"
          className={`w-5 h-5 ${color}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Second star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return starsarr;
  }
  return (
    <section className="w-11/12 mx-auto mt-5">
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl italic font-serif">Customer Reviews</h1>
        <button
          className="text-gray-100 bg-background hoverable  capitalize text-sm mx-2 px-2 rounded-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <div className="flex">
            <span className="px-2 py-2">Write A Review</span>
          </div>
        </button>
      </div>

      {showModal ? (
        <>
          <div className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white py-12 px-4 sm:px-6 lg:px-8">
            <form>
              <div className="flex justify-between items-center">
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
                        onClick={() => setRating(index)}
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
              <div className="flex justify-between w-96 items-center my-5">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-1/4"
                >
                  Review Title
                </label>
                <input
                  type="text"
                  id="default-input"
                  class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Review Title"
                  required
                />
              </div>
              <div className="flex justify-between items-center my-5">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 w-1/4"
                >
                  Review
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4"
                  required
                  minLength={50}
                  placeholder="Your Review..."
                ></textarea>
              </div>
              <div class="mb-6 flex justify-between items-center">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-1/4"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-1/4"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4"
                  placeholder="Your Name"
                  required
                  minLength={3}
                />
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
      {reviews.length &&
        reviews.map((review) => {
          return (
            <div className="w-10/12 mx-auto">
              <section className="flex jusrify-center my-10">
                <div className="w-1/4">
                  <h3 className="font-bold">{review.name}</h3>
                </div>
                <div className="w-3/4">
                  <div className="flex mt-2.5 mb-5">{forloop(review.rate)}</div>
                  <h2 className="font-bold">{review.title}</h2>
                  <p>{review.discreption}</p>
                </div>
              </section>
              <hr />
            </div>
          );
        })}
    </section>
  );
}
