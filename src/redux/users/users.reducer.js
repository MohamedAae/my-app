import {LOGINUSER, REGISTERUSER} from "./users.types";

const initialState = {
  user: {},
  token: "",
  loading: true,
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
    case LOGINUSER:
      return {
        ...state,
        user: action.user,
        token: action.token,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
