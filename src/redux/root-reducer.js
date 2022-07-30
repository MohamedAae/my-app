import { combineReducers } from "redux";

const rootReducer = combineReducers({
  testReducer: () => {
    return 1;
  },
});

export default rootReducer;
