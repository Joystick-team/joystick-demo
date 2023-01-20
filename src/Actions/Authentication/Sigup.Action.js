import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL } from "../../Action-Creators/Authenication/Signup.Auth";
import axios from "axios";
import  { default as api } from '../../config/config.json'

export const signupAction = (first_name,last_name,email,password,username) => async (dispatch, getState) => {
    try {
        dispatch({ type: SIGNUP_REQUEST });
        const { data } = await axios.post(`${api.url}/auth/signup`, { first_name, last_name, email, password, username })
        dispatch({ type: SIGNUP_SUCCESS, payload: data });
        localStorage.setItem("signup_id",JSON.stringify(data))
    } catch (error) {
        dispatch({ type: SIGNUP_FAIL, payload: error?.response?.data?.message })
    }
}