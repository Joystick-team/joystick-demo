import { SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAIL } from "../../Action-Creators/Authenication/Signup.Auth";

export const signupReducer = (state={loading:false},{type,payload}) =>{
    switch (type) {
        case SIGNUP_REQUEST:
            return { loading: true,signup_success:false };
        case SIGNUP_SUCCESS:
            return { loading: false,signup_success: true, userId: payload };
        case SIGNUP_FAIL:
            return { loading: false, error: payload, signup_success: false };
        default:
            return state;
    }
}