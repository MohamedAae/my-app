import React, {useState} from "react";
import {LockClosedIcon, UserIcon} from "@heroicons/react/solid";
import {connect} from "react-redux";
import {registerUser} from "../../../../redux/users/users.action";
import {isBoolean} from "lodash";

const Register = (props) => {

    const [errors, setErrors]                = useState({
        name: "",
        email: "",
        password: ""
    }),
    [submissionError, setSubmissionError]    = useState({
        error: false,
        message: `Error registering, check your data.`,
    }),
    [showModal, setShowModal]               = useState(false),
    [checkPasswords, setCheckPasswords]     = useState(false),
    [userData, setUserData]                 = useState({
        name: "",
        validName: false,
        password: "",
        validPassword: false,
        confirmPassword: "",
        validConfirmPassword: false,
        email: "",
        validEmail: false,
    });

    const changeDataHandler = (event, init) => {
        const value = event.target.value;
        switch (init) {
            case "name":
                setUserData({
                    ...userData,
                    name: value,
                    validName: value.length >= 3,
                });
                validateInput("Name", "name", "Name must be 3 characters long.");
                break;

            case "email":
                setUserData({
                    ...userData,
                    email: value,
                    validEmail: validateEmail(value),
                });
                validateInput("Email", "email", "Make sure you entered valid email.");
                break;

            case "password":
                setUserData({
                    ...userData,
                    password: value,
                    validPassword: value.length >= 5,
                    validConfirmPassword: userData.confirmPassword === value,
                });
                validateInput("Password", "password", "Make sure your password > 5" +
                    " characters.");
                break;

            case "confirmPassword":
                setUserData({
                    ...userData,
                    confirmPassword: value,
                    validConfirmPassword: value === userData.password,
                });
                break;

            default:
                break;
        }
    };

    const validateInput = (field, errorProperty, message) => {
        userData[`valid${field}`] ?
            setErrors({...errors, [errorProperty]: ""})
            :
            setErrors({...errors, [errorProperty]: message});
    }

    const validateEmail = (email) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    };


    const submitData = (event) => {
        event.preventDefault();
        if (
            userData.validName &&
            userData.validEmail &&
            userData.validPassword &&
            userData.validConfirmPassword
        ) {
            props.registerUser(userData);
            return setShowModal(false);
        }

        const errorSlices = handleRegisterError(userData);
        errorSlices.map((slice) => {
            setSubmissionError({
                ...submissionError,
                error: true,
            });
        });
    };

    const handleRegisterError = (userData) => {
        const errors = [];
        for (let property in userData) {
            if (isBoolean(userData[property]) && !userData[property]) {
                errors.push(property);
            }
        }

        return errors;
    };

    return (
        <>
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

            {showModal ? (
                <>
                    <div
                        className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8">
                            <div>
                                <h2 className="capitalize text-center text-3xl font-bold text-background">
                                    Sign up for your account
                                </h2>
                                {submissionError.error ? (
                                    <span
                                        className="text-red-500 m-0 w-full text-center block mt-2 font-semibold">
                    {submissionError.message}
                  </span>
                                ) : (
                                    ""
                                )}
                            </div>
                            <form className="mt-8 mb-8 space-y-6"
                                  onSubmit={submitData}>
                                <div
                                    className="rounded-md shadow-sm -space-y-px">
                                    {
                                        errors.name
                                            ?
                                            <span className={`font-base text-sm text-red-800 font-bold capitalize mb-3 block`}>{ errors.name }</span>
                                            :
                                            ""
                                    }
                                    <div>
                                        <label htmlFor="name"
                                               className="sr-only">
                                            Name
                                        </label>
                                        <input
                                            onChange={(event) => {
                                                changeDataHandler(event, "name")
                                            }}
                                            value={userData.name}
                                            name="text"
                                            type="name"
                                            id="name"
                                            required
                                            className="mb-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        {
                                            errors.email
                                                ?
                                                <span className={`font-base text-sm text-red-800 font-bold capitalize mb-3 block`}>{ errors.email }</span>                                                :
                                                ""
                                        }
                                        <label htmlFor="email"
                                               className="sr-only">
                                            Email Address
                                        </label>
                                        <input
                                            onChange={(event) => changeDataHandler(event, "email")}
                                            value={userData.email}
                                            name="email"
                                            id="email"
                                            type="email"
                                            required
                                            className="mb-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div>
                                        {
                                            errors.password
                                                ?
                                                <span className={`font-base text-sm text-red-800 font-bold capitalize mb-3 block`}>{ errors.password }</span>                                                :
                                                ""
                                        }
                                        <label htmlFor="password"
                                               className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            onChange={(event) => changeDataHandler(event, "password")}
                                            value={userData.password}
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="mb-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div>
                                        {
                                            checkPasswords
                                                ?
                                                    userData.password == userData.confirmPassword
                                                        ?
                                                            ""
                                                        :
                                                            <span className={`font-base text-sm text-red-800 font-bold capitalize mb-3 block`}>Passwords doesn't match</span>
                                                :
                                                    ""
                                        }
                                        <label htmlFor="confirmpassword"
                                               className="sr-only">
                                            Confirm Password
                                        </label>
                                        <input
                                            onChange={(event) =>
                                                changeDataHandler(event, "confirmPassword")
                                            }
                                            onBlur={() => setCheckPasswords(true)}
                                            value={userData.confirmPassword}
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
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-background bg-theme hover:bg-theme-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                </>
            ) : null}
        </>
    );
};

let mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => dispatch(registerUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
