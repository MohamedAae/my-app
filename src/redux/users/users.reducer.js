import {
  LOGINUSER,
  REGISTERUSER,
  CHECKIFLOGGEDIN,
  LOGOUT,
  REGISTERFAIL,
} from "./users.types";

const initialState = {
  user: {},
  token: "",
  loading: true,
  loggedIn: false,
  rememberMe: false,
  message: "",
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case REGISTERUSER:
      return {
        ...state,
        user: action.user,
        token: "",
        loading: false,
      };
    case REGISTERFAIL:
      return {
        ...state,
        message: action.message,
      };
    case LOGINUSER:
      return {
        ...state,
        user: action.user,
        token: action.token,
        loading: false,
        loggedIn: action.loggedIn,
        rememberMe: action.rememberMe,
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

    default:
      return state;
  }
};

export default reducer;
