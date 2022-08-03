import axios from "axios";
import { REGISTERUSER, LOGINUSER } from "./users.types";

export const registerUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`http://127.0.0.1:5003/users/register`, user);
    dispatch({
      type: REGISTERUSER,
      user: res.data.user,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const loginUser = (userCredentials) => async (dispatch) => {
  try {
    const res = await axios.post(`http://127.0.0.1:5003/users/login`, userCredentials);
    dispatch({
      type: LOGINUSER,
      user: res.data.error,
    });
  } catch (e) {
    console.log(e.message);
  }
};
