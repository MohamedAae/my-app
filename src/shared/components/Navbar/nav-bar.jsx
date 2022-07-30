import React from "react";
import "./nav-bar.css";
import "flowbite";
export default function Navbar() {
  const navItems = [
    {
      id: 1,
      item: "Books",
      url: "/category/books",
      hasMegaMenu: true,
      megaMenu: [
        {
          title: "Best Sellers",
          offer: {
            title: "Offer title",
            image: "image_url",
          },
          subCategories: [
            {
              title: "Top 100",
              url: "https://www.barnesandnoble.com/b/books/_/N-1fZ29Z8q8",
            },
          ],
        },
      ],
    },
    { id: 2, item: "Books", url: "/category/books", hasMegaMenu: false },
    { id: 3, item: "Books", url: "/category/books", hasMegaMenu: false },
    { id: 4, item: "Books", url: "/category/books", hasMegaMenu: false },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 relative">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 ">
        <a href="https://flowbite.com" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <button
          id="mega-menu-full-cta-button"
          data-collapse-toggle="mega-menu-full-cta"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-cta"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="mega-menu-full-cta"
          className=" justify-between items-center w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
            {navItems &&
              navItems.map((navItem) => {
                if (navItem.hasMegaMenu) {
                  return (
                    <li className="hoverable py-4 ">
                      <a href="#" className="relative block ">
                        <button class="flex justify-between items-center  pr-4 pl-3  font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                          Company{" "}
                          <svg
                            class="ml-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </a>
                      <div
                        id="mega-menu-full-cta-dropdown"
                        className=" mega-menu   shadow-sm  dark:bg-gray-800 dark:border-gray-600"
                      >
                        <div className="grid bg-blue-100  py-5 px-4 mx-auto max-w-screen-xl text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                          <ul
                            className="space-y-4 sm:mb-4 md:mb-0"
                            aria-labelledby="mega-menu-full-cta-button"
                          >
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Online Stores
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Segmentation
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Marketing CRM
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Online Stores
                              </a>
                            </li>
                          </ul>
                          <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Our Blog
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                License
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Resources
                              </a>
                            </li>
                          </ul>
                          <div className="mt-4 md:mt-0">
                            <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                              Our brands
                            </h2>
                            <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                              At Flowbite, we have a portfolio of brands that
                              cater to a variety of preferences.
                            </p>
                            <a
                              href="#"
                              className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700"
                            >
                              Explore our brands
                              <span className="sr-only">
                                Explore our brands{" "}
                              </span>
                              <svg
                                className="ml-1 w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }
                return (
                  <li className="py-4" key={navItem.id}>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      {navItem.item}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
