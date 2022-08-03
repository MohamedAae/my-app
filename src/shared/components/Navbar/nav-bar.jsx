import TopSlider from "./top-slider/top-slider";
import Search from "./search/search";
import Cart from "./cart/cart";
import Register from "./register/register";
import Login from "./login/login";

import "./nav-bar.css";

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
    { id: 5, item: "Books", url: "/category/books", hasMegaMenu: false },
    { id: 6, item: "Books", url: "/category/books", hasMegaMenu: false },
    { id: 7, item: "Books", url: "/category/books", hasMegaMenu: false },
    { id: 8, item: "Books", url: "/category/books", hasMegaMenu: false },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 relative">
      <TopSlider></TopSlider>
      <div
        id="mega-menu-full-cta"
        className="justify-between w-full md:flex md:order-1 mx-auto max-w-screen-xl px-4 md:px-6"
      >
        <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
          {navItems &&
            navItems.map((navItem) => {
              return (
                <li className="py-4" key={navItem.id}>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    {navItem.item} <span className="ml-3">|</span>
                  </a>
                </li>
              );
            })}
        </ul>
        <Login></Login>
        <Register />
      </div>
      <div className="flex flex-col justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 ">
        <div className="flex justify-between items-center w-full">
          <a href="https://flowbite.com" className="flex items-center">
            <svg
              width="248"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              alt="logo"
              className="brand rhf-logo mobile-hide"
            >
              <defs>
                <path id="a" d="M.187.131h18.541v20.98H.188z"></path>
                <path id="c" d="M.057.145h13.29V17.6H.058z"></path>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="translate(125.384 .189)">
                  <mask id="b" fill="#fff">
                    <use xlinkHref="#a"></use>
                  </mask>
                  <path
                    d="M7.595 19.509c-1.376 0-2.448-.396-3.219-1.19-.771-.793-1.157-1.866-1.157-3.217 0-1.724.656-3.159 1.967-4.305l6.037 7.332c-1.099.92-2.308 1.38-3.628 1.38zM5.606 1.645c.796-.455 1.896-.384 2.606.196.764.626 1.008 1.498.993 2.437-.03 1.824-.99 3.136-2.4 4.23C5.614 7.242 4.622 5.95 4.438 4.198c-.11-1.049.344-2.081 1.169-2.554zm13.011 18.158a4.465 4.465 0 01-.845.088c-.664 0-1.245-.21-1.744-.631-.498-.422-1.052-1.083-1.661-1.984.94-1.469 1.412-3.222 1.412-5.26 0-.42-.027-.881-.083-1.38-.028-.177.05-.29.235-.338l1.731-.456-.041-.646c-.37.02-.76.034-1.17.044-.412.01-.853.015-1.322.015a84.177 84.177 0 01-3.172-.06l.028.662 1.717.367a.87.87 0 01.394.176c.088.08.146.211.173.397.056.372.084.857.084 1.455 0 1.459-.305 2.762-.914 3.908L7.534 9.298c2.829-1.4 4.137-3.034 4.137-5.062 0-1.254-.342-2.317-1.24-3.032C9.534.488 8.428.13 7.111.13c-1.494 0-2.745.421-3.752 1.264-1.007.842-1.51 1.964-1.51 3.364 0 .764.14 1.509.422 2.233.282.725.926 1.714 1.932 2.968C1.526 11.45.187 13.33.187 15.6c0 1.676.65 3.003 1.951 3.982 1.301.98 2.903 1.47 4.805 1.47 2.03 0 3.872-.637 5.526-1.91 1.025 1.312 2.267 1.969 3.726 1.969a5.25 5.25 0 002.533-.662l-.11-.646z"
                    fill="#C0A02E"
                    mask="url(#b)"
                  ></path>
                </g>
                <path
                  d="M0 2.017h8.104c1.995 0 3.566.548 4.563 1.546.798.798 1.197 1.77 1.197 2.967v.05c0 1.97-1.047 3.067-2.294 3.765 2.02.773 3.267 1.945 3.267 4.289v.05c0 3.192-2.594 4.787-6.533 4.787H0V2.017zm10.049 5.161c0-1.147-.898-1.795-2.519-1.795H3.74v3.69h3.541c1.695 0 2.768-.548 2.768-1.845v-.05zm-1.87 5.087H3.74v3.84h4.564c1.695 0 2.717-.598 2.717-1.895v-.05c0-1.172-.872-1.895-2.842-1.895zM26.41 1.892h3.541l7.48 17.58h-4.014l-1.596-3.915h-7.38l-1.597 3.914H18.93l7.48-17.579zm4.04 10.273l-2.32-5.66-2.318 5.66h4.638zM42.905 2.017h7.98c2.219 0 3.94.623 5.086 1.77.973.973 1.496 2.344 1.496 3.99v.05c0 2.817-1.52 4.588-3.74 5.41l4.264 6.234h-4.488l-3.74-5.585h-3.018v5.585h-3.84V2.017zm7.73 8.478c1.87 0 2.943-.998 2.943-2.469v-.05c0-1.646-1.148-2.493-3.018-2.493h-3.815v5.012h3.89zM64.494 2.017h3.541l8.179 10.747V2.017h3.79V19.47h-3.266L68.285 8.375v11.096h-3.79zM87.933 2.017H101.1v3.416h-9.35v3.54h8.228v3.417h-8.229v3.665h9.476v3.416h-13.29zM106.685 16.928l2.269-2.718c1.57 1.297 3.216 2.12 5.211 2.12 1.57 0 2.519-.624 2.519-1.646v-.05c0-.973-.599-1.471-3.517-2.22-3.515-.897-5.784-1.87-5.784-5.335v-.05c0-3.167 2.543-5.261 6.109-5.261 2.543 0 4.713.797 6.483 2.219l-1.995 2.892c-1.546-1.072-3.067-1.72-4.538-1.72s-2.244.673-2.244 1.52v.05c0 1.147.748 1.522 3.765 2.294 3.541.923 5.536 2.195 5.536 5.237v.05c0 3.466-2.643 5.41-6.409 5.41-2.643 0-5.311-.921-7.405-2.792M149.39 1.933h3.54l8.18 10.747V1.933h3.789v17.455h-3.267L153.18 8.29v11.097h-3.79zM170.56 10.71v-.05c0-4.962 3.914-9.026 9.3-9.026 5.386 0 9.251 4.014 9.251 8.976v.05c0 4.962-3.915 9.026-9.3 9.026-5.387 0-9.252-4.014-9.252-8.976m14.537 0v-.05c0-2.992-2.194-5.486-5.286-5.486-3.092 0-5.236 2.444-5.236 5.436v.05c0 2.992 2.194 5.486 5.286 5.486 3.092 0 5.236-2.444 5.236-5.436M195.27 1.933h8.104c1.994 0 3.565.548 4.563 1.546.798.798 1.197 1.77 1.197 2.967v.05c0 1.97-1.048 3.067-2.294 3.765 2.02.773 3.266 1.945 3.266 4.289v.05c0 3.192-2.593 4.788-6.533 4.788h-8.303V1.933zm10.048 5.162c0-1.148-.897-1.796-2.518-1.796h-3.79v3.69h3.541c1.695 0 2.767-.548 2.767-1.845v-.05zm-1.87 5.086h-4.438v3.84h4.563c1.696 0 2.718-.598 2.718-1.895v-.05c0-1.172-.872-1.895-2.843-1.895zM215.517 1.933h3.84v13.964h8.702v3.49h-12.542z"
                  fill="#54575A"
                ></path>
                <g transform="translate(233.816 1.788)">
                  <mask id="d" fill="#fff">
                    <use xlinkHref="#c"></use>
                  </mask>
                  <path
                    fill="#54575A"
                    mask="url(#d)"
                    d="M.057.145h13.166V3.56h-9.35v3.54H12.1v3.417H3.873v3.666h9.475V17.6H.058z"
                  ></path>
                </g>
              </g>
            </svg>
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span> */}
          </a>
          <Search></Search>
          <Cart></Cart>
        </div>
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
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="mega-menu-full-cta"
          className="justify-items-start w-full md:flex md:order-1"
        >
          <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0 w-full">
            {navItems &&
              navItems.map((navItem) => {
                if (navItem.hasMegaMenu) {
                  return (
                    <li className="hoverable py-4 ">
                      <a href="#" className="relative block ">
                        <button className="flex justify-between items-center  pr-4 pl-3  font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                          Company{" "}
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
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
                                  fillRule="evenodd"
                                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
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
                      {navItem.item} <span className="ml-3">|</span>
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
