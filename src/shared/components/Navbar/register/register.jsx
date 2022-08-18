import React, {useState, useReducer} from "react";
import {LockClosedIcon, UserIcon} from "@heroicons/react/solid";
import {connect} from "react-redux";
import {registerUser} from "../../../../redux/users/users.action";
import {useEffect} from "react";
import Notification from "../../notification/notification";

const dataReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.data.value, isValid: action.data.isValid,
        };
    }
    return {
        value: "", isValid: true,
    };
};

let i = 0;

const Register = (props) => {

    const [sentData, setSentData] = useState(false);
    const [notify, setNotify] = useState(false);
    const [notificationBg, setNotificationBg] = useState("transparent");
    const [message, setMessage] = useState("");

    const [nameState, dispatchName] = useReducer(dataReducer, {
        value: "", isValid: true,
    });

    const [emailState, dispatchEmail] = useReducer(dataReducer, {
        value: "", isValid: true,
    });

    const [passwordState, dispatchPassword] = useReducer(dataReducer, {
        value: "", isValid: true,
    });

    const [confirmPasswordState, dispatchConfirmPassword] = useReducer(dataReducer, {
        value: "", isValid: true,
    });

    const nameChangeHandler = (event) => {
        dispatchName({
            type: "USER_INPUT", data: {
                value: event.target.value,
                isValid: event.target.value.trim().length >= 3,
            },
        });
    };

    const emailChangeHandler = (event) => {
        dispatchEmail({
            type: "USER_INPUT", data: {
                value: event.target.value,
                isValid: validateEmail(event.target.value),
            },
        });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({
            type: "USER_INPUT", data: {
                value: event.target.value,
                isValid: event.target.value.length > 5,
            },
        });
        if (confirmPasswordState.value.length > 0) {
            dispatchConfirmPassword({
                type: "USER_INPUT", data: {
                    value: confirmPasswordState.value,
                    isValid: event.target.value === confirmPasswordState.value,
                },
            });
        }
    };

    const confirmPasswordChangeHandler = (event) => {
        dispatchConfirmPassword({
            type: "USER_INPUT", data: {
                value: event.target.value,
                isValid: event.target.value === passwordState.value,
            },
        });
    };

    const [showModal, setShowModal] = useState(false);

    const validateEmail = (email) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    const submitData = async (event) => {
        event.preventDefault();
        hardResetNotify();

        if (nameState.isValid && emailState.isValid && passwordState.isValid && confirmPasswordState.isValid) {
            props.registerUser({
                name: nameState.value,
                password: passwordState.value,
                email: emailState.value,
            });

            setSentData(true);
            ++i;
            return setShowModal(false);
        }
    };

    useEffect(() => {
        if (sentData && props.message) {
            fireNotification("red", props.message);
            return;
        }

        fireNotification("green", `Successfully registered the account!`);

    }, [props.message, i]);

    const fireNotification = (bg, message) => {
        setNotificationBg(bg);
        setNotify(true);
        setMessage(message);
        softResetNotify();
    }

    const softResetNotify = () => {
        setTimeout(() => {
            setNotificationBg("transparent");
            setNotify(false);
            setMessage("");
        }, 4000);
    }

    const hardResetNotify = () => {
        setNotificationBg("transparent");
        setNotify(false);
        setMessage("");
    }

    return (<>
        <Notification bg={notificationBg}
                      message={message ? message : ""}
                      show={notify}/>
        <button
            className="py-2 text-background bg-theme hoverable hover:bg-theme-hover capitalize text-sm mx-2 px-2 rounded-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
        >
            <div className="flex">
                <UserIcon width={20} height={20}></UserIcon>
                <span className="pl-1">Sign up</span>
            </div>
        </button>

        {showModal ? (<>
            <div
                className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="capitalize text-center text-3xl font-bold text-background">
                            Sign up for your account
                        </h2>
                    </div>
                    <form className="mt-8 mb-8 space-y-6"
                          onSubmit={submitData}>
                        <div
                            className="rounded-md shadow-sm -space-y-px">
                            {!nameState.isValid ? (<span
                                className={`font-base text-sm text-red-800 font-bold mb-3 block`}
                            >
                      Name must be 3 or more characters.
                    </span>) : ("")}
                            <div>
                                <label htmlFor="name"
                                       className="sr-only">
                                    Name
                                </label>
                                <input
                                    onChange={nameChangeHandler}
                                    value={nameState.value}
                                    name="text"
                                    type="name"
                                    id="name"
                                    required
                                    className="mb-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                {!emailState.isValid ? (<span
                                    className={`font-base text-sm text-red-800 font-bold mb-3 block`}
                                >
                        Please enter a valid email
                      </span>) : ("")}
                                <label htmlFor="email"
                                       className="sr-only">
                                    Email Address
                                </label>
                                <input
                                    onChange={emailChangeHandler}
                                    value={emailState.value}
                                    name="email"
                                    id="email"
                                    type="email"
                                    required
                                    className="mb-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                {!passwordState.isValid ? (<span
                                    className={`font-base text-sm text-red-800 font-bold mb-3 block`}
                                >
                        Password must be more than 5 digits
                      </span>) : ("")}
                                <label htmlFor="password"
                                       className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={passwordChangeHandler}
                                    value={passwordState.value}
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="mb-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                {!confirmPasswordState.isValid ? (<span
                                    className={`font-base text-sm text-red-800 font-bold mb-3 block`}
                                >
                        Passwords doesn't match
                      </span>) : ("")}
                                <label htmlFor="confirmpassword"
                                       className="sr-only">
                                    Confirm Password
                                </label>
                                <input
                                    onChange={confirmPasswordChangeHandler}
                                    value={confirmPasswordState.value}
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    type="password"
                                    required
                                    className="mb-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="confirm Password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                disabled={!(nameState.value.length > 0 && emailState.value.length > 0 && passwordState.value.length > 0 && confirmPasswordState.value.length > 0 && nameState.isValid && emailState.isValid && passwordState.isValid && confirmPasswordState.isValid)}
                                type="submit"
                                className="disabled:opacity-50 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-background bg-theme hover:bg-theme-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <LockClosedIcon
                                    className="h-5 w-5 text-background"
                                    aria-hidden="true"
                                />
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                onClick={() => setShowModal(false)}
                className="opacity-25 fixed inset-0 z-40 bg-black"
            ></div>
        </>) : null}
    </>);
};

let mapStateToProps = (state) => {
    return {
        user: state.user, message: state.user.message,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => dispatch(registerUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
