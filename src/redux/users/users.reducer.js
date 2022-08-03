import {LOGINUSER, REGISTERUSER} from "./users.types";

const initialState = {
  user: {},
  loading: true,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERUSER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    case LOGINUSER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
