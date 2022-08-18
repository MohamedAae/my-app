import TopSlider from "./top-slider/top-slider";
import Search from "./search/search";
import Cart from "./cart/cart";
import Register from "./register/register";
import Login from "./login/login";
import {connect} from "react-redux";
import {
    checkIfLoggedIn,
    loginUser,
    logOut,
} from "../../../redux/users/users.action";
import "./nav-bar.css";
import {NavLink} from "react-router-dom";
import {ChevronDownIcon, LogoutIcon, UserIcon, ChipIcon} from "@heroicons/react/solid";
import {useEffect, useState} from "react";
import {
    AddToCart,
    EditCartItem,
    RemoveFromCart,
} from "../../../redux/cart/cart.action";
import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";
import {Transition} from "@headlessui/react";

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

    const [isOpen, setOpen] = useState(false),
        navItems = [
            {
                id: 1,
                item: "Home",
                url: "/",
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
            {id: 2, item: "Shop", url: "/shop", hasMegaMenu: false},
            {id: 3, item: "About", url: "/about", hasMegaMenu: false},
            {id: 4, item: "Contact Us", url: "/contactus", hasMegaMenu: false},
        ];

    const placeSperator = (i, row) => {
        if (i + 1 !== row.length) {
            return (
                <li className="hidden text-gray-400 flex justify-center items-center md:inline-flex">
                    &#9672;
                </li>
            );
        }

        return "";
    };

    return (
        <nav className="bg-white pb-1 border-gray-200">
            <TopSlider></TopSlider>
            <div
                className="flex md:gap-x-20 justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6">
                <div className="flex justify-between items-center ">
                    <NavLink to={"/"} className="flex items-center">
                        {/*<h1 className={`text-2xl font-serif text-theme-hover lowercase capitalize`}>mwmmy <span*/}
                        {/*    className={`text-background`}>Books</span></h1>*/}
                        <img width={190} height={70} src={"/logo.jpeg"}
                             alt="mwmmmy logo"/>
                        <img src="" alt=""/>
                    </NavLink>
                </div>
                <div className={`hidden md:block w-full`}>
                    <Search></Search>
                </div>
                <Cart
                    addFunction={props.AddToCart}
                    editFunction={props.EditCartItem}
                    removeFunction={props.RemoveFromCart}
                    item={props.items}
                    totalPrice={props.price}
                    totalItems={props.totalItems}
                />
                <button
                    onClick={() => setOpen(!isOpen)}
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
                {/*<div*/}
                {/*    id="mega-menu-full-cta"*/}
                {/*    className="justify-items-start w-full md:flex md:order-1"*/}
                {/*></div>*/}
            </div>
            <div
                id="mega-menu-full-cta"
                className="hidden mb-3 justify-between w-full md:flex md:order-1 mx-auto max-w-screen-xl px-4 md:px-6 relative mt-5"
            >
                <ul className="flex flex-col text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                    {navItems &&
                        navItems.map((navItem, i, row) => {
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
                                    {placeSperator(i, row)}
                                </>
                            );
                        })}
                </ul>
                <div className="flex capitalize justify-center">
                    {props.loggedIn ? (
                        <div>
                            <Menu>
                                <MenuHandler>
                                    <Button variant="gradient"
                                            className="text-black">
                                        {`Hi, ${props.user.name}`}
                                        <ChevronDownIcon
                                            className="inline"
                                            width={15}
                                            height={15}
                                        />
                                    </Button>
                                </MenuHandler>
                                <MenuList className="z-50 w-40 pt-2">
                                    {
                                        props.user.isAdmin ?
                                            <MenuItem className="flex">
                                                <ChipIcon
                                                    width={20}
                                                    height={20}
                                                    className="text-background mr-2"
                                                ></ChipIcon>
                                                <NavLink
                                                    to={"/dashboard"}>Dashboard</NavLink>
                                            </MenuItem>
                                            :
                                            ""
                                    }
                                    <MenuItem className="flex">
                                        <UserIcon
                                            width={20}
                                            height={20}
                                            className="text-background mr-2"
                                        ></UserIcon>
                                        <NavLink
                                            to={"/my-account"}> Account</NavLink>
                                    </MenuItem>
                                    <MenuItem className="flex">
                                        <LogoutIcon
                                            width={20}
                                            height={20}
                                            className="text-background mr-2"
                                        ></LogoutIcon>
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
                            <Login loginFunction={props.loginUser} errorMessage={props.loginErrorMessage}/>
                            <Register/>
                        </>
                    )}
                </div>
            </div>
            <div className={`md:hidden flex justify-end my-5 px-4`}>
                {props.loggedIn ? (
                    <div>
                        <Menu>
                            <MenuHandler>
                                <Button variant="gradient"
                                        className="text-black">
                                    {`Hi, ${props.user.name}`}
                                    <ChevronDownIcon
                                        className="inline"
                                        width={15}
                                        height={15}
                                    />
                                </Button>
                            </MenuHandler>
                            <MenuList className="z-50 w-40 pt-2">
                                {
                                    props.user.isAdmin ?
                                        <MenuItem className="flex">
                                            <ChipIcon
                                                width={20}
                                                height={20}
                                                className="text-background mr-2"
                                            ></ChipIcon>
                                            <NavLink
                                                to={"/dashboard"}>Dashboard</NavLink>
                                        </MenuItem>
                                        :
                                        ""
                                }
                                <MenuItem className="flex">
                                    <UserIcon
                                        width={20}
                                        height={20}
                                        className="text-background mr-2"
                                    ></UserIcon>
                                    <NavLink
                                        to={"/my-account"}> Account</NavLink>
                                </MenuItem>
                                <MenuItem className="flex">
                                    <LogoutIcon
                                        width={20}
                                        height={20}
                                        className="text-background mr-2"
                                    ></LogoutIcon>
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
                        <Login loginFunction={props.loginUser}/>
                        <Register/>
                    </>
                )}
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <ul ref={ref} className="px-4 pt-2 pb-3 sm:px-4">
                            {navItems
                                ? navItems.map((navItem) => {
                                    return (
                                        <li className={`mb-5`} key={navItem.id}>
                                            <NavLink
                                                to={navItem.url}
                                                className="text-base font-sans text-background hover:text-theme-hover"
                                            >
                                                {navItem.item}
                                            </NavLink>
                                        </li>
                                    );
                                })
                                : ""}
                        </ul>
                    </div>
                )}
            </Transition>
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
        loginErrorMessage: state.user.loginErrorMessage,
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
