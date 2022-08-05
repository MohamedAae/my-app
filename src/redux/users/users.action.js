import axios from "axios";
import { REGISTERUSER, LOGINUSER, CHECKIFLOGGEDIN } from "./users.types";

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
    const res = await axios.post(
      `http://127.0.0.1:5003/users/login`,
      userCredentials
    );
    if (res.data.success) {
      dispatch({
        type: LOGINUSER,
        user: res.data.user,
        token: res.data.user.token,
        loggedIn: true,
      });
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const checkIfLoggedIn = () => async (dispatch) => {
  try {
    const checkLocalStorage = await localStorage.getItem("loggedInUser");
    if (checkLocalStorage) {
      const user = JSON.parse(checkLocalStorage);
      // console.log(user);
      dispatch({
        type: CHECKIFLOGGEDIN,
        user,
        token: user.token,
        loggedIn: true,
      });
    }
  } catch (e) {
    console.log(e.message);
  }
};
