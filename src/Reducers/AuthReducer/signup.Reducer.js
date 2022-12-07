import { SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAIL } from "../../Action-Creators/Authenication/Signup.Auth";

export const signupReducer = (state={loading:false},{type,payload}) =>{
    switch (type) {
        case SIGNUP_REQUEST:
            return { loading: true,success:false };
        case SIGNUP_SUCCESS:
            return { loading: false, success: true, userId: payload };
        case SIGNUP_FAIL:
            return { loading: false, error: payload, success: true };
        default:
            return state;
    }
}