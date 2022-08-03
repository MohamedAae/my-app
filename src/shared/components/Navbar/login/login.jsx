import {useState} from "react";
import {connect} from "react-redux";

import {loginUser} from "../../../../redux/users/users.action";

import {LockClosedIcon, UserIcon} from '@heroicons/react/solid'

const Login = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    });

    const changeDataHandler = (event, init) => {
        const value = event.target.value;
        switch (init) {
            case "email":
                setUserCredentials({
                    ...userCredentials,
                    email: value,
                });
                break;

            case "password":
                setUserCredentials({
                    ...userCredentials,
                    password: value,
                });
                break;

            default:
                break;
        }
    };

    const submitData = (event) => {
        event.preventDefault();
        props.loginUser(userCredentials);
        console.log(props.user);
        // console.log(userCredentials);
    }

    return (
        <>
            <button
                className="text-gray-700 uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <div className="flex">
                    <LockClosedIcon width={20} height={20}></LockClosedIcon>
                    <span className="pl-3">Sign In</span>
                </div>
                <hr className="my-2"/>
            </button>

            {
                showModal ?
                    <>
                        <div
                            className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-md w-full space-y-8">
                                <div>
                                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign
                                        in to your account</h2>
                                    <p className="mt-2 text-center text-sm text-gray-600">
                                        Or{' '}
                                        <a href="#"
                                           className="font-medium text-indigo-600 hover:text-indigo-500">
                                            start your 14-day free trial
                                        </a>
                                    </p>
                                </div>
                                <form className="mt-8 space-y-6"
                                      onSubmit={(event) => submitData(event)}>
                                    <input type="hidden" name="remember"
                                           defaultValue="true"/>
                                    <div
                                        className="rounded-md shadow-sm -space-y-px">
                                        <div>
                                            <label htmlFor="email-address"
                                                   className="sr-only">
                                                Email address
                                            </label>
                                            <input
                                                onChange={(event) => changeDataHandler(event, "email")}
                                                value={userCredentials.email}
                                                id="email-address"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Email address"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password"
                                                   className="sr-only">
                                                Password
                                            </label>
                                            <input
                                                onChange={(event) => changeDataHandler(event, "password")}
                                                value={userCredentials.password}
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Password"
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="remember-me"
                                                   className="ml-2 block text-sm text-gray-900">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm">
                                            <a href="#"
                                               className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                <span
                    className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"/>
                </span>
                                            Sign in
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
                    :
                    ""
            }

        </>
    )
}

let mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

