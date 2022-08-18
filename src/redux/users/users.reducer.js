import {
  LOGINUSER,
  REGISTERUSER,
  CHECKIFLOGGEDIN,
  LOGOUT,
  REGISTERFAIL, CHECKIFADMIN,
} from "./users.types";

const initialState = {
  user: {},
  token: "",
  loading: true,
  registerLoading: true,
  loggedIn: false,
  rememberMe: false,
  message: "",
  isAdmin: false,
  loginErrorMessage: "",
  registerErrorMessage: "",
  permissionChecked: false,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case REGISTERUSER:
      if (action.registerError) {
        return {
          ...state,
          registerLoading: false,
          registerErrorMessage: action.registerErrorMessage
        };
      }

      return {
        ...state,
        user: action.user,
        token: "",
        message: "",
        registerLoading: false,
        loading: false,
        registerErrorMessage: ""
      };

    case REGISTERFAIL:
      return {
        ...state,
        message: action.message,
      };

    case LOGINUSER:
      if (action.error) {
        return {
          ...state,
          loginErrorMessage: action.errorMessage
        };
      }

      return {
        ...state,
        user: action.user,
        token: action.token,
        loading: false,
        loggedIn: action.loggedIn,
        rememberMe: action.rememberMe,
        isAdmin: action.user.isAdmin ? action.user.isAdmin : false,
        loginErrorMessage: ""
      };


    case CHECKIFLOGGEDIN:
      return {
        ...state,
        user: action.user,
        token: action.token,
        loading: false,
        loggedIn: action.loggedIn,
      };

    case LOGOUT:
      return {
        ...state,
        user: action.user,
        token: action.token,
        loading: false,
        loggedIn: action.loggedIn,
      };

    case CHECKIFADMIN:
      return {
        ...state,
        isAdmin: action.isAdmin,
        permissionChecked: true,
      };

    default:
      return state;
  }
};

export default reducer;
