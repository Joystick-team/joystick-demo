import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL } from "../../Action-Creators/Authenication/Signup.Auth";
import axios from "axios";

export const signupAction = (first_name,last_name,email,password,username) => async (dispatch, getState) => {
    try {
        dispatch({ type: SIGNUP_REQUEST });
        const { data } = await axios.post("https://api.joysticklabs.io/api/v1/auth/signup", { first_name, last_name, email, password, username })
        dispatch({ type: SIGNUP_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SIGNUP_FAIL, payload: error?.response?.data?.message[0] })
        console.log("signup-error", error);
    }
}