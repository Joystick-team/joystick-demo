import { SIGININ_REQUEST, SIGININ_SUCCESS, SIGININ_FAIL, LOGOUT } from "../../Action-Creators/Authenication/Signin.Auth";
import axios from "axios";

export const loginAction = (username, password) => async (dispatch, getState) => {
    console.log("login-details", username,password)
    try {
        dispatch({ type: SIGININ_REQUEST });
        const { data } = await axios.post("https://api.joysticklabs.io/api/v1/auth/login", { username, password });
        dispatch({ type: SIGININ_SUCCESS, payload: data });
        console.log("user_token", data)
        localStorage.setItem("userToken", JSON.stringify(data));

    } catch (error) {
        console.log("login_error",error?.response?.data?.message)
        dispatch({ type: SIGININ_FAIL, payload: error?.response?.data?.message });
    }
}

export const logoutAction = () => (dispatch, getState) => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("userToken");
}