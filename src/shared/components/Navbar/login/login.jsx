import { useState } from "react";

import { LockClosedIcon } from "@heroicons/react/solid";

const Login = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    rememberMe: false,
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

      case "rememberme":
        setUserCredentials({
          ...userCredentials,
          rememberMe: !userCredentials.rememberMe,
        });
        break;

      default:
        break;
    }
  };

  const submitData = (event) => {
    event.preventDefault();
    props.loginFunction(userCredentials);
  };

  return (
    <>
      <button
        className="py-2 text-gray-700 bg-gray-200 hoverable hover:text-gray-200 hover:bg-gray-700 capitalize text-sm mx-2 px-2 rounded-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex">
          <LockClosedIcon width={20} height={20}></LockClosedIcon>
          <span className="pl-1">Sign In</span>
        </div>
      </button>

      {showModal ? (
        <>
          <div className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="capitalize text-center text-3xl font-bold text-background">
                  Sign in to your account
                </h2>
              </div>
              <form
                className="mt-8 mb-8 space-y-6"
                onSubmit={(event) => submitData(event)}
              >
                <input
                  type="hidden"
                  name="remember"
                  defaultValue={userCredentials.rememberMe}
                />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
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
                      className="mb-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      onChange={(event) => changeDataHandler(event, "password")}
                      value={userCredentials.password}
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="mb-8 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      onChange={(event) =>
                        changeDataHandler(event, "rememberme")
                      }
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-background hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
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
      ) : (
        ""
      )}
    </>
  );
};

export default Login;
