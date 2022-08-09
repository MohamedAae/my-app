import TopSlider from "./top-slider/top-slider";
import Search from "./search/search";
import Cart from "./cart/cart";
import Register from "./register/register";
import Login from "./login/login";
import { connect } from "react-redux";
import {
  loginUser,
  checkIfLoggedIn,
  logOut,
} from "../../../redux/users/users.action";
import "./nav-bar.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import {
  AddToCart,
  EditCartItem,
  RemoveFromCart,
} from "../../../redux/cart/cart.action";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

let user = {};
const Navbar = (props) => {
  if (Object.keys(props.user).length !== 0 && props.rememberMe) {
    user = props.user;
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }

  if (Object.keys(props.user).length !== 0 && !props.rememberMe) {
    user = props.user;
    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
  }

  useEffect(() => {
    props.checkIfLoggedIn();
  }, []);

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
    { id: 2, item: "Shop", url: "/shop", hasMegaMenu: false },
    { id: 3, item: "About", url: "/about", hasMegaMenu: false },
    { id: 4, item: "Contact Us", url: "/contactus", hasMegaMenu: false },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <TopSlider></TopSlider>
      <div className="flex flex-col justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 ">
        <div className="flex justify-between items-center w-full">
          <NavLink to={"/"} className="flex items-center">
            <h1 className={`text-2xl font-serif text-theme-hover lowercase`}>
              mwmmy <span className={`text-background`}>Books</span>
            </h1>
          </NavLink>
          <Search></Search>
          <Cart
            addFunction={props.AddToCart}
            editFunction={props.EditCartItem}
            removeFunction={props.RemoveFromCart}
            item={props.items}
            totalPrice={props.price}
            totalItems={props.totalItems}
          />
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
        ></div>
      </div>
      <div
        id="mega-menu-full-cta"
        className="mb-3 justify-between w-full md:flex md:order-1 mx-auto max-w-screen-xl px-4 md:px-6 relative mt-5"
      >
        <ul className="flex flex-col text-sm font-medium md:flex-row md:space-x-8 md:mt-0 ">
          {navItems &&
            navItems.map((navItem) => {
              if (navItem.hasMegaMenu) {
                return (
                  <li className="hoverable py-2">
                    <a
                      href="#"
                      className="relative block text-base font-sans hover:text-theme-hover"
                    >
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
                            <span className="sr-only">Explore our brands </span>
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
                <>
                  <li className="py-2" key={navItem.id}>
                    <NavLink
                      to={navItem.url}
                      className=" text-base font-sans text-background hover:text-theme-hover"
                      aria-current="page"
                    >
                      {navItem.item}
                    </NavLink>
                  </li>
                  <li className=" text-gray-400 flex justify-center items-center">
                    &#9672;
                  </li>
                </>
              );
            })}
        </ul>
        <div className="flex capitalize ">
          {props.loggedIn ? (
            <div>
              <Menu>
                <MenuHandler>
                  <Button variant="gradient" className="text-black">
                    {`Hi, ${props.user.name}`}
                    <ChevronDownIcon
                      className="inline"
                      width={15}
                      height={15}
                    />
                  </Button>
                </MenuHandler>
                <MenuList className="z-50 w-40">
                  <MenuItem>
                    <NavLink to={"/my-account"}>Account</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={() => {
                        props.LogOutUser();
                      }}
                    >
                      Logout
                    </button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          ) : (
            <>
              <Login loginFunction={props.loginUser} />
              <Register />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

let mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn,
    rememberMe: state.user.rememberMe,
    items: state.cart.cartItems,
    price: state.cart.totalPrice,
    totalItems: state.cart.totalItems,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    checkIfLoggedIn: () => dispatch(checkIfLoggedIn()),
    loginUser: (user) => dispatch(loginUser(user)),
    LogOutUser: () => dispatch(logOut()),
    AddToCart: (product) => dispatch(AddToCart(product)),
    EditCartItem: (id, price) => dispatch(EditCartItem(id, price)),
    RemoveFromCart: (id, price) => dispatch(RemoveFromCart(id, price)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
